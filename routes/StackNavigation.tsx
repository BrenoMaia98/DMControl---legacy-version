// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../assets/src/Login';
import Menu from '../assets/src/Menu';
import FoodAndMealManager from '../assets/src/FoodAndMealManager';
import EditingMeal from '../assets/src/EditingMeal';
import CreatingMeal from '../assets/src/CreatingMeal';
import SelectMeal from '../assets/src/SelectMeal';
import FoodQuantity from '../assets/src/FoodQuantity';
import FinalQuestions from '../assets/src/FinalQuestions';
import InsulinDosage from '../assets/src/InsulinDosage';

export type StackProps = {
  Login: undefined;
  Menu: undefined;
  FoodAndMealManager: undefined;
  EditingMeal: undefined;
  CreatingMeal: undefined;
  SelectMeal: undefined;
  FoodQuantity: undefined;
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
      <Stack.Screen name="SelectMeal" component={SelectMeal} />
      <Stack.Screen name="FoodQuantity" component={FoodQuantity} />
      <Stack.Screen name="FinalQuestions" component={FinalQuestions} />
      <Stack.Screen name="InsulinDosage" component={InsulinDosage} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
