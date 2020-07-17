import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

export type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'MealSelection'
>;

export interface MealSelectionProps {
  navigation: ProfileScreenNavigationProp;
}
export interface MealPreviewData {
  title: string;
  foodNames: string[];
}
