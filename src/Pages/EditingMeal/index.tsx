import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import SearchBar from '../../Components/SearchBar';
import FoodEditTable from '../../Components/FoodEditTable';
import { foodRowsDTO } from '../../Components/FoodEditTable/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'EditingMeal'
>;

type EditingMealProps = {
  navigation: ProfileScreenNavigationProp;
};

const EditingMeal: React.FC<EditingMealProps> = ({ navigation }) => {
  const languageScreen = Strings.EditingMealContent.English;
  const { ButtonActionScreen, Header, SearchLabel, Table } = languageScreen;

  const [foodRows, setFoodRows] = React.useState<foodRowsDTO[]>([]);
  React.useEffect(() => {
    const mockData: foodRowsDTO[] = [
      { name: 'Bread and Butter', measure: 'unit' },
      { name: 'Chocolate Milk', measure: '350ml' },
      { name: 'Eggs and Bacon', measure: '-' },
    ];
    setFoodRows(mockData);
  }, []);

  const onSearch = (value: string): void => {
    Alert.alert(`Busca`, `${value} \n Work in Progress xD`);
  };

  const removeFoodFromIndex = (index: number) => {
    const dataCopy = [...foodRows];
    setFoodRows(dataCopy.filter((_, indexArr) => index !== indexArr));
  };

  const editFoodFromIndex = (index: number) => {
    const dataCopy = [...foodRows];
    setFoodRows(dataCopy.filter((_, indexArr) => index !== indexArr));
  };

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GiMeal}
        screenActionProps={{
          buttonProps: {
            onPress: () => navigation.push('CreatingMeal'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <SearchBar
        label={SearchLabel}
        labelPosition="inlineLabel"
        onSearch={(value: string) => onSearch(value)}
      />
      <FoodEditTable
        foodRows={foodRows}
        editFoodFromIndex={editFoodFromIndex}
        removeFoodFromIndex={removeFoodFromIndex}
        Table={Table}
      />
    </View>
  );
};

export default EditingMeal;
