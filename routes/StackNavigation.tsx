// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../assets/src/Pages/Login';
import Menu from '../assets/src/Pages/Menu';
import FoodAndMealManager from '../assets/src/Pages/FoodAndMealManager';
import EditingMeal from '../assets/src/Pages/EditingMeal';
import CreatingMeal from '../assets/src/Pages/CreatingMeal';
import MealSelection from '../assets/src/Pages/MealSelection';
import FoodSelection from '../assets/src/Pages/FoodSelection';
import FinalQuestions from '../assets/src/Pages/FinalQuestions';
import InsulinDosage from '../assets/src/Pages/InsulinDosage';

export type StackProps = {
  Login: undefined;
  Menu: undefined;
  FoodAndMealManager: undefined;
  EditingMeal: undefined;
  CreatingMeal: undefined;
  MealSelection: undefined;
  FoodSelection: undefined;
  FinalQuestions: undefined;
  InsulinDosage: undefined;
};

const Stack = createStackNavigator<StackProps>();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="FoodAndMealManager" component={FoodAndMealManager} />
      <Stack.Screen name="EditingMeal" component={EditingMeal} />
      <Stack.Screen name="CreatingMeal" component={CreatingMeal} />
      <Stack.Screen name="MealSelection" component={MealSelection} />
      <Stack.Screen name="FoodSelection" component={FoodSelection} />
      <Stack.Screen name="FinalQuestions" component={FinalQuestions} />
      <Stack.Screen name="InsulinDosage" component={InsulinDosage} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
