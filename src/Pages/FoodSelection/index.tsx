import React from 'react';
import { View, FlatList, ScrollView, Dimensions } from 'react-native';
import { Row, Col } from 'native-base';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import { FoodDTO } from '../../Database';
import { FoodSelectionPageProps } from './types';
import { TableTitle, JustifyCenter } from './styles';
import IconButton from '../../Components/IconButton';
import { ColorPalette } from '../../Constants/ColorPalette';
import SelectFoodModal from '../../Components/SelectFoodModal';
import renderFoodRowQuantity from './renderFoodRowQuantity';

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
    const foods = route.params?.foodData || [
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

  return (
    <View
      style={{
        height: Dimensions.get('screen').height,
      }}
    >
      <TitleBar
        header={Header}
        titleIcon={IconEnum.Book}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.PlusCircle,
            iconSize: 'md',
            onPress: () => navigation.navigate('FinalQuestions'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <View style={{ display: 'flex', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Row>
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
        </View>
        <View style={{ flex: 8 }}>
          <ScrollView>
            <FlatList
              data={foodData}
              extraData={foodData}
              renderItem={({ item, index }) => {
                return renderFoodRowQuantity({
                  item,
                  index,
                  deleteFoodAtIndex,
                  onQuantityChange,
                  quantity,
                });
              }}
              keyExtractor={(item, index) => `${item.foodName}-${index}`}
            />
          </ScrollView>
        </View>
        <JustifyCenter style={{ flex: 2 }}>
          <IconButton
            onPress={() => {
              setVisible(true);
            }}
            IconColor={ColorPalette.green}
            defaultIcon={IconEnum.PlusCircle}
            size="lg"
          />
        </JustifyCenter>
      </View>

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
