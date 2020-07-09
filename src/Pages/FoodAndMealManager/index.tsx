import React from 'react';
import { View, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import TitleBar from '../../Components/TitleBar';
import PickIcon from '../../Utils/PickIcon';
import { InstructionText } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
type MealPreviewData = {
  title: string;
  foodNames: string[];
};

const FoodAndMealManager: React.FC<Props> = ({ navigation }) => {
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
      const mealData: MealPreviewData[] = [
        {
          title: 'Breakfast',
          foodNames: [
            'Bread and Butter',
            'Milk with chocolate',
            'Eggs and Bacon',
          ],
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
      setMealData();
    }, 1000);
  }, []);

  return (
    <View>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GiMeal}
        screenActionProps={{
          buttonProps: {
            onPress: () => navigation.push('FoodAndMealManager'),
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

      <FlatList data={mealData} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default FoodAndMealManager;
