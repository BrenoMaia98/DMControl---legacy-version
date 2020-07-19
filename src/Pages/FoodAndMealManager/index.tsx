import React from 'react';
import { View } from 'react-native';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import PickIcon from '../../Utils/PickIcon';
import { InstructionText } from './styles';
import ExpansiveMealPreview from '../../Components/ExpansiveMealPreview';
import { FoodAndMealManagerProps } from './types';
import { MealDataDTO } from '../MealSelection/types';

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

  const [mealData, setMealData] = React.useState<MealDataDTO[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      const mockMealData: MealDataDTO[] = [
        {
          title: 'Breakfast',
          foods: [
            {
              foodName: 'Bread and Butter',
              measure: 'unit',
              cho: 1,
              kcal: 1,
              volumeMlOrGram: '-',
            },
            {
              foodName: 'Chocolate Milk',
              measure: '350ml',
              cho: 1,
              kcal: 1,
              volumeMlOrGram: '-',
            },
            {
              foodName: 'Eggs and Bacon',
              measure: '-',
              cho: 1,
              kcal: 1,
              volumeMlOrGram: '-',
            },
          ],
        },
        {
          title: 'Barbecue',
          foods: [
            {
              foodName: 'Garlic bread',
              measure: '-',
              cho: 1,
              kcal: 1,
              volumeMlOrGram: '-',
            },
            {
              foodName: 'Filet Steak',
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
            {
              foodName: 'Fanta',
              measure: '-',
              cho: 1,
              kcal: 1,
              volumeMlOrGram: '-',
            },
          ],
        },
        {
          title: `Monday's Dinner`,
          foods: [
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
          ],
        },
      ];
      setMealData(mockMealData);
    }, 50);
  }, []);

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.Meal}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.PlusCircle,
            iconSize: 'md',
            onPress: () => navigation.navigate('CreateAndEditMeal'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <InstructionText>
        {Instruction1}
        {PickIcon({ iconType: IconEnum.Edit, size: 'sm' })}
        {Instruction2}
      </InstructionText>
      <ExpansiveMealPreview
        onEdit={(meal: MealDataDTO) => {
          navigation.navigate('CreateAndEditMeal', { meal });
        }}
        onDelete={(mealTitle: string) => {
          setMealData(
            mealData.filter((mealitem) => mealitem.title !== mealTitle)
          );
        }}
        meals={mealData}
      />
    </View>
  );
};

export default FoodAndMealManager;
