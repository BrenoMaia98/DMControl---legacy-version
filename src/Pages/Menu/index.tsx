import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import DefaultButton from '../../Components/DefaultButton';
import { StackProps } from '../../../routes/StackNavigation';
import { Container, Divider } from './styles';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Menu'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Menu: React.FC<Props> = ({ navigation }) => {
  const languageScreen = Strings.Menu.English;
  const {
    Header,
    CalculateInsulin,
    MealAndFoodManager,
    MeasurementHistory,
    Profile,
  } = languageScreen;
  return (
    <>
      <TitleBar header={Header} titleIcon={IconEnum.RestaurantMenu} />
      <Container>
        <DefaultButton
          onPress={() => navigation.navigate('MealSelection')}
          text={CalculateInsulin}
          buttonSize="large"
          iconLeft={IconEnum.Meal}
          iconSize="md"
        />
        <Divider />
        <DefaultButton
          onPress={() => navigation.navigate('FoodAndMealManager')}
          text={MealAndFoodManager}
          buttonSize="large"
          iconLeft={IconEnum.Pill}
          iconSize="md"
        />
        <Divider />
        <DefaultButton
          onPress={() => navigation.navigate('InProgress')}
          text={MeasurementHistory}
          buttonSize="large"
          iconLeft={IconEnum.Graph}
          iconSize="md"
        />
        <Divider />
        <DefaultButton
          onPress={() => navigation.navigate('InProgress')}
          text={Profile}
          buttonSize="large"
          iconLeft={IconEnum.Person}
          iconSize="md"
        />
      </Container>
    </>
  );
};

export default Menu;
