import React from 'react';
import { View } from 'react-native';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import PickIcon from '../../Utils/PickIcon';
import { InstructionText } from './styles';
import ExpansiveMealPreview from '../../Components/ExpansiveMealPreview';
import { MealPreviewData, FoodAndMealManagerProps } from './types';

const FoodAndMealManager: React.FC<FoodAndMealManagerProps> = ({
  navigation,
}) => {
  const languageScreen = Strings.FoodAndMealManager.English;
  const {
    ButtonActionScreen,
    Header,
    Instruction1,
    Instruction2,
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
    }, 1000);
  }, []);
  console.log(mealData);

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GiMeal}
        screenActionProps={{
          buttonProps: {
            onPress: () => navigation.push('CreateAndEditMeal'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <InstructionText>
        {Instruction1}
        {PickIcon({ iconType: IconEnum.FiEdit, size: 'sm' })}
        {Instruction2}
      </InstructionText>
      <ExpansiveMealPreview
        onEdit={(meal: MealPreviewData) => {
          navigation.push('CreateAndEditMeal', { meal });
          console.log('Edit');
        }}
        onDelete={() => {
          console.log('Delete');
        }}
        meals={mealData}
      />
    </View>
  );
};

export default FoodAndMealManager;
