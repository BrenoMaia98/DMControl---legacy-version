import React from 'react';
import { View, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RouteProp } from '@react-navigation/native';
import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import SearchBar from '../../Components/SearchBar';
import FoodEditTable from '../../Components/FoodEditTable';
import SelectFoodModal from '../../Components/SelectFoodModal';
import { FoodDTO } from '../../Database';

type stackNavigationProp = StackNavigationProp<StackProps, 'CreateAndEditMeal'>;

type routeProps = RouteProp<StackProps, 'CreateAndEditMeal'>;

export interface CreateAndEditMealProps {
  navigation: stackNavigationProp;
  route: routeProps;
}

const CreateAndEditMeal: React.FC<CreateAndEditMealProps> = ({
  route,
  navigation,
}) => {
  const languageScreen = Strings.CreateAndEditMeal.English;
  const {
    ButtonActionScreen: CreateButtonActionScreen,
    Header: CreateHeader,
  } = languageScreen.Create;
  const {
    ButtonActionScreen: EditButtonActionScreen,
    Header: EditHeader,
    InputLabel,
    Table,
  } = languageScreen.Edit;

  const [foodRows, setFoodRows] = React.useState<FoodDTO[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    const mockData: FoodDTO[] =
      route.params?.meal?.foods ||
      [
        // {
        //   foodName: 'Bread and Butter',
        //   measure: 'unit',
        //   cho: 1,
        //   kcal: 1,
        //   volumeMlOrGram: '-',
        // },
        // {
        //   foodName: 'Chocolate Milk',
        //   measure: '350ml',
        //   cho: 1,
        //   kcal: 1,
        //   volumeMlOrGram: '-',
        // },
        // {
        //   foodName: 'Eggs and Bacon',
        //   measure: '-',
        //   cho: 1,
        //   kcal: 1,
        //   volumeMlOrGram: '-',
        // },
      ];
    setFoodRows(mockData);
  }, []);

  const onSearch = (value: string): void => {
    console.log(`${value} \n Work in Progress xD`);
    Alert.alert(`Busca`, `${value} \n Work in Progress xD`);
  };

  const removeFoodFromIndex = (index: number) => {
    const dataCopy = [...foodRows];
    setFoodRows(dataCopy.filter((_, indexArr) => index !== indexArr));
  };

  const editFoodFromIndex = (index: number) => {
    console.log({ EditIndex: index });
    setVisible(true);
  };

  const addFood = (item: FoodDTO) => {
    const dataCopy = [...foodRows];
    dataCopy.push(item);
    setFoodRows(dataCopy);
  };

  return (
    <View>
      <TitleBar
        header={route.params?.meal ? EditHeader : CreateHeader}
        titleIcon={IconEnum.FaAppleAlt}
        screenActionProps={{
          buttonProps: {
            iconSize: 'md',
            iconLeft: IconEnum.MdSave,
            onPress: () => navigation.navigate('FoodAndMealManager'),
            text: route.params?.meal
              ? EditButtonActionScreen
              : CreateButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <SearchBar
        label={InputLabel}
        labelPosition="inlineLabel"
        onSearch={(value: string) => onSearch(value)}
      />
      <FoodEditTable
        foodRows={foodRows}
        editFoodFromIndex={editFoodFromIndex}
        removeFoodFromIndex={removeFoodFromIndex}
        addFood={() => setVisible(true)}
        Table={Table}
      />
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

export default CreateAndEditMeal;
