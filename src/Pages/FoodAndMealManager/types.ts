import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';
import { FoodDTO } from '../../Database';

export type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'FoodAndMealManager'
>;

export interface FoodAndMealManagerProps {
  navigation: ProfileScreenNavigationProp;
}
export interface MealData {
  title: string;
  foodNames: FoodDTO[];
}
