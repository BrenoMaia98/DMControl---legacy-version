import React from 'react';
import { View } from 'react-native';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import { InstructionText } from './styles';
import ExpansiveMealPreview from '../../Components/ExpansiveMealPreview';
import { MealPreviewData, MealSelectionProps } from './types';
import SearchBar from '../../Components/SearchBar';

const MealSelection: React.FC<MealSelectionProps> = ({ navigation }) => {
  const languageScreen = Strings.MealSelection.English;
  const {
    ButtonActionScreen,
    Header,
    SearchLabel,
    Instruction1,
  } = languageScreen;

  const [mealData, setMealData] = React.useState<MealPreviewData[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      const mockMealData: MealPreviewData[] = [
        {
          title: 'Breakfast',
          foodNames: ['Bread and Butter', 'Chocolate Milk', 'Eggs and Bacon'],
        },
        {
          title: 'Barbecue',
          foodNames: ['Garlic bread', 'Filet Steak', 'Cassava', 'Fanta'],
        },
        {
          title: `Monday's Dinner`,
          foodNames: ['Pizza Cheese', 'Coke', 'Cassava'],
        },
      ];
      setMealData(mockMealData);
    }, 50);
  }, []);

  const onSearchMeal = (value: string) => {};

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GoBook}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.AiOutlinePlusCircle,
            iconSize: 'md',
            onPress: () => navigation.push('FoodSelection'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <SearchBar
        align="center"
        label={SearchLabel}
        onSearch={(string) => onSearchMeal(string)}
        labelPosition="inlineLabel"
      />
      <InstructionText>{Instruction1}</InstructionText>
      <ExpansiveMealPreview
        onEdit={(meal: MealPreviewData) => {
          navigation.push('CreateAndEditMeal', { meal });
        }}
        onDelete={() => {}}
        meals={mealData}
      />
    </View>
  );
};

export default MealSelection;
