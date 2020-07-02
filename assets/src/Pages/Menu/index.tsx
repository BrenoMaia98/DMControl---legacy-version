import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Menu'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Menu: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('FoodAndMealManager')}>
        <Text>
          Meal and Food Manager Lets go for a <FaBeer />?
        </Text>
      </Button>
      <Button onPress={() => navigation.navigate('MealSelection')}>
        <Text>Calculate Insulin Dosage</Text>
      </Button>
    </View>
  );
};

export default Menu;
