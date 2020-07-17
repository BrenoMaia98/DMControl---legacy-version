// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/Pages/Login';
import Menu from '../src/Pages/Menu';
import FoodAndMealManager from '../src/Pages/FoodAndMealManager';
import CreateAndEditMeal from '../src/Pages/CreateAndEditMeal';
import MealSelection from '../src/Pages/MealSelection';
import FoodSelection from '../src/Pages/FoodSelection';
import FinalQuestions from '../src/Pages/FinalQuestions';
import InsulinDosage from '../src/Pages/InsulinDosage';
import InProgress from '../src/Pages/InProgress';
import { MealDataDTO } from '../src/Pages/MealSelection/types';
import { FoodSelectionRouteParams } from '../src/Pages/FoodSelection/types';

export type StackProps = {
  Login: undefined;
  Menu: undefined;
  FoodAndMealManager: undefined;
  CreateAndEditMeal: { meal?: MealDataDTO[] } | undefined;
  MealSelection: undefined;
  FoodSelection: FoodSelectionRouteParams;
  FinalQuestions: undefined;
  InsulinDosage: undefined;
  InProgress: undefined;
};
const Stack = createStackNavigator<StackProps>();
const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="MealSelection" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="FoodAndMealManager" component={FoodAndMealManager} />
      <Stack.Screen name="CreateAndEditMeal" component={CreateAndEditMeal} />
      <Stack.Screen name="MealSelection" component={MealSelection} />
      <Stack.Screen name="FoodSelection" component={FoodSelection} />
      <Stack.Screen name="FinalQuestions" component={FinalQuestions} />
      <Stack.Screen name="InsulinDosage" component={InsulinDosage} />
      <Stack.Screen name="InProgress" component={InProgress} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
