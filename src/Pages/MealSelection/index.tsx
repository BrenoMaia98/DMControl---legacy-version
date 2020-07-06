import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'MealSelection'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const MealSelection: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('FoodSelection')}>
        <Text>Food Quantity Selection</Text>
      </Button>
    </View>
  );
};

export default MealSelection;
