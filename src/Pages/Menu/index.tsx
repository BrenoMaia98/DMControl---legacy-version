import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import DefaultButton from '../../Components/DefaultButton';
import { StackProps } from '../../../routes/StackNavigation';
import { Container } from './styles';
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
      <TitleBar header={Header} titleIcon={IconEnum.MdRestaurantMenu} />
      <Container>
        <DefaultButton
          onPress={() => navigation.navigate('MealSelection')}
          text={CalculateInsulin}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.navigate('FoodAndMealManager')}
          text={MealAndFoodManager}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.navigate('InProgress')}
          text={MeasurementHistory}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.navigate('InProgress')}
          text={Profile}
          buttonSize="large"
        />
      </Container>
    </>
  );
};

export default Menu;
