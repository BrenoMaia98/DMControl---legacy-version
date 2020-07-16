import React from 'react';
import { View, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import SearchBar from '../../Components/SearchBar';
import FoodEditTable from '../../Components/FoodEditTable';
import { foodRowsDTO } from '../../Components/FoodEditTable/types';
import SelectFoodModal from '../../Components/SelectFoodModal';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'CreateAndEditMeal'
>;

type CreateAndEditMealProps = {
  navigation: ProfileScreenNavigationProp;
};

const CreateAndEditMeal: React.FC<CreateAndEditMealProps> = ({
  navigation,
}) => {
  const languageScreen = Strings.CreateAndEditMealContent.English;
  const { ButtonActionScreen, Header, InputLabel, Table } = languageScreen;

  const [foodRows, setFoodRows] = React.useState<foodRowsDTO[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    const mockData: foodRowsDTO[] = [
      { name: 'Bread and Butter', measure: 'unit' },
      { name: 'Chocolate Milk', measure: '350ml' },
      { name: 'Eggs and Bacon', measure: '-' },
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

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.FaAppleAlt}
        screenActionProps={{
          buttonProps: {
            iconSize: 'md',
            iconLeft: IconEnum.MdSave,
            onPress: () => navigation.push('CreatingMeal'),
            text: ButtonActionScreen,
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
