import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import DefaultButton from '../../Components/DefaultButton';
import { StackProps } from '../../../routes/StackNavigation';
import { Container } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Menu'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Menu: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <DefaultButton
        onPress={() => navigation.push('FoodAndMealManager')}
        text="Calculate Insulin Dosage"
        buttonSize="large"
      />
      <DefaultButton
        onPress={() => navigation.push('MealSelection')}
        text="Meal and Food Manager"
        buttonSize="large"
      />
      <DefaultButton
        onPress={() => navigation.push('InProgress')}
        text="Measurement History"
        buttonSize="large"
      />
      <DefaultButton
        onPress={() => navigation.push('InProgress')}
        text="Profile"
        buttonSize="large"
      />
    </Container>
  );
};

export default Menu;
