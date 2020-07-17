import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';
import { FoodDTO } from '../../Database';

export type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'MealSelection'
>;

export interface MealSelectionProps {
  navigation: ProfileScreenNavigationProp;
}
export interface MealDataDTO {
  title: string;
  foods: FoodDTO[];
}
