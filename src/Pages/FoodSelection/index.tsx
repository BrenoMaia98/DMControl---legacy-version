import React from 'react';
import { View, FlatList, CheckBox, ScrollView, Dimensions } from 'react-native';
import { Text, Row, Col, Radio } from 'native-base';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import { FoodDTO } from '../../Database';
import { FoodSelectionPageProps } from './types';
import {
  OtherQuantityinput,
  InputsRows,
  TableTitle,
  RowContainer,
  JustifyCenter,
} from './styles';
import IconButton from '../../Components/IconButton';
import { ColorPalette } from '../../Constants/ColorPalette';
import SelectFoodModal from '../../Components/SelectFoodModal';

const FoodSelection: React.FC<FoodSelectionPageProps> = ({
  navigation,
  route,
}) => {
  const languageScreen = Strings.FoodSelection.English;
  const { ButtonActionScreen, Header, Table } = languageScreen;

  const [foodData, setFoodData] = React.useState<FoodDTO[]>([]);
  const [quantity, setQuantity] = React.useState<string[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const foods = route.params.foodData || [
      {
        foodName: 'Pizza Cheese',
        measure: '-',
        cho: 1,
        kcal: 1,
        volumeMlOrGram: '-',
      },
      {
        foodName: 'Coke',
        measure: '-',
        cho: 1,
        kcal: 1,
        volumeMlOrGram: '-',
      },
      {
        foodName: 'Cassava',
        measure: '-',
        cho: 1,
        kcal: 1,
        volumeMlOrGram: '-',
      },
    ];
    setFoodData(foods);
    const selectedArray = Array(foods.length).fill('');
    setQuantity(selectedArray);
  }, []);

  const onQuantityChange = (
    index: number,
    value: string,
    isAlreadyChecked = true
  ) => {
    console.log({ index, value, isAlreadyChecked });
    const quantityCopy = [...quantity];
    quantityCopy[index] = isAlreadyChecked ? '' : value;
    console.log(quantityCopy, quantity);
    setQuantity(quantityCopy);
  };

  const deleteFoodAtIndex = (indexToRemove: number) => {
    setQuantity(quantity.filter((_, index) => index !== indexToRemove));
    setFoodData(foodData.filter((_, index) => index !== indexToRemove));
  };

  const addFood = (item: FoodDTO) => {
    const dataCopy = [...foodData];
    dataCopy.push(item);
    setFoodData(dataCopy);
    const quantityCopy = [...quantity];
    quantityCopy.push('');
    setQuantity(quantityCopy);
  };

  const renderFoodRowQuantity = (item: FoodDTO, index: number) => (
    <RowContainer>
      <Row>
        <Col>
          <Text>{item.foodName}</Text>
        </Col>
        <Col>
          <Text>{item.measure}</Text>
        </Col>
        <Col>
          <IconButton
            onPress={() => deleteFoodAtIndex(index)}
            defaultIcon={IconEnum.MdDelete}
            IconColor={ColorPalette.red}
          />
        </Col>
      </Row>
      <Text>Quantity:</Text>
      <InputsRows>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            1
          </Text>
          <Radio
            selected={quantity[index] === '1'}
            onPress={() => {
              onQuantityChange(index, '1', quantity[index] === '1');
            }}
          />
        </Row>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            2
          </Text>
          <Radio
            selected={quantity[index] === '2'}
            onPress={() => {
              onQuantityChange(index, '2', quantity[index] === '2');
            }}
          />
        </Row>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            3
          </Text>
          <Radio
            selected={quantity[index] === '3'}
            onPress={() => {
              onQuantityChange(index, '3', quantity[index] === '3');
            }}
          />
        </Row>
        <OtherQuantityinput
          keyboardType="numeric"
          placeholder="Other quantity"
          onChangeText={(text) => onQuantityChange(index, text)}
        />
      </InputsRows>
    </RowContainer>
  );

  return (
    <View style={{ height: Dimensions.get('screen').height }}>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GoBook}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.AiOutlinePlusCircle,
            iconSize: 'md',
            onPress: () => navigation.navigate('FinalQuestions'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <Row style={{ marginTop: 50 }}>
          <Col>
            <TableTitle>{Table.colum01}</TableTitle>
          </Col>
          <Col>
            <TableTitle>{Table.colum02}</TableTitle>
          </Col>
          <Col>
            <TableTitle>{Table.colum03}</TableTitle>
          </Col>
        </Row>
        <FlatList
          data={foodData}
          extraData={foodData}
          renderItem={({ item, index }) => renderFoodRowQuantity(item, index)}
          keyExtractor={(item, index) => `${item.foodName}-${index}`}
        />
      </ScrollView>
      <JustifyCenter>
        <IconButton
          onPress={() => {
            setVisible(true);
          }}
          IconColor={ColorPalette.green}
          defaultIcon={IconEnum.AiOutlinePlusCircle}
          size="lg"
        />
      </JustifyCenter>
      <SelectFoodModal
        onSelect={(item) => addFood(item)}
        language="ENUS"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

export default FoodSelection;
