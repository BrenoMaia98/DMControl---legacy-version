import React from 'react';
import { View } from 'react-native';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import { InstructionText } from './styles';
import ExpansiveMealPreview from '../../Components/ExpansiveMealPreview';
import { MealDataDTO, MealSelectionProps } from './types';
import SearchBar from '../../Components/SearchBar';

const MealSelection: React.FC<MealSelectionProps> = ({ navigation }) => {
  const languageScreen = Strings.MealSelection.English;
  const {
    ButtonActionScreen,
    Header,
    SearchLabel,
    Instruction1,
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

  const onSearchMeal = (value: string) => {
    console.log(value);
  };

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.Apple}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.PlusCircle,
            iconSize: 'md',
            onPress: () =>
              navigation.navigate('FoodSelection', { foodData: [] }),
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
        onEdit={(meal: MealDataDTO) => {
          navigation.navigate('FoodSelection', { foodData: meal.foods });
        }}
        onDelete={() => {}}
        meals={mealData}
      />
    </View>
  );
};

export default MealSelection;
