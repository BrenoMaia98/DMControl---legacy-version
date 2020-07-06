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
  InProgress: undefined;
};
const Stack = createStackNavigator<StackProps>();
const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Menu"
        options={{ headerShown: false }}
        component={Menu}
      />
      <Stack.Screen
        name="FoodAndMealManager"
        options={{ headerShown: false }}
        component={FoodAndMealManager}
      />
      <Stack.Screen
        name="EditingMeal"
        options={{ headerShown: false }}
        component={EditingMeal}
      />
      <Stack.Screen
        name="CreatingMeal"
        options={{ headerShown: false }}
        component={CreatingMeal}
      />
      <Stack.Screen
        name="MealSelection"
        options={{ headerShown: false }}
        component={MealSelection}
      />
      <Stack.Screen
        name="FoodSelection"
        options={{ headerShown: false }}
        component={FoodSelection}
      />
      <Stack.Screen
        name="FinalQuestions"
        options={{ headerShown: false }}
        component={FinalQuestions}
      />
      <Stack.Screen
        name="InsulinDosage"
        options={{ headerShown: false }}
        component={InsulinDosage}
      />
      <Stack.Screen
        name="InProgress"
        options={{ headerShown: false }}
        component={InProgress}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
