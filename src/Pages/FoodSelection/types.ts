import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { FoodDTO } from '../../Database';
import { StackProps } from '../../../routes/StackNavigation';

type Route = RouteProp<StackProps, 'FoodSelection'>;

type Navigation = StackNavigationProp<StackProps, 'FoodSelection'>;

export interface FoodSelectionRouteParams {
  foodData: FoodDTO[];
}

export interface FoodSelectionPageProps {
  navigation: Navigation;
  route: Route;
}
