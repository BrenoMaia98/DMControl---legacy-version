// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/Pages/Login';
import Menu from '../src/Pages/Menu';
import FoodAndMealManager from '../src/Pages/FoodAndMealManager';
import EditingMeal from '../src/Pages/EditingMeal';
import CreatingMeal from '../src/Pages/CreatingMeal';
import MealSelection from '../src/Pages/MealSelection';
import FoodSelection from '../src/Pages/FoodSelection';
import FinalQuestions from '../src/Pages/FinalQuestions';
import InsulinDosage from '../src/Pages/InsulinDosage';
import InProgress from '../src/Pages/InProgress';
import { MealPreviewData } from '../src/Pages/FoodAndMealManager/types';

export type StackProps = {
  Login: undefined;
  Menu: undefined;
  FoodAndMealManager: undefined;
  EditingMeal: { meal: MealPreviewData };
  CreatingMeal: undefined;
  MealSelection: undefined;
  FoodSelection: undefined;
  FinalQuestions: undefined;
  InsulinDosage: undefined;
  InProgress: undefined;
};
const Stack = createStackNavigator<StackProps>();
const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="EditingMeal" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="FoodAndMealManager" component={FoodAndMealManager} />
      <Stack.Screen name="EditingMeal" component={EditingMeal} />
      <Stack.Screen name="CreatingMeal" component={CreatingMeal} />
      <Stack.Screen name="MealSelection" component={MealSelection} />
      <Stack.Screen name="FoodSelection" component={FoodSelection} />
      <Stack.Screen name="FinalQuestions" component={FinalQuestions} />
      <Stack.Screen name="InsulinDosage" component={InsulinDosage} />
      <Stack.Screen name="InProgress" component={InProgress} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
