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
          onPress={() => navigation.push('MealSelection')}
          text={CalculateInsulin}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.push('FoodAndMealManager')}
          text={MealAndFoodManager}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.push('InProgress')}
          text={MeasurementHistory}
          buttonSize="large"
        />
        <DefaultButton
          onPress={() => navigation.push('InProgress')}
          text={Profile}
          buttonSize="large"
        />
      </Container>
    </>
  );
};

export default Menu;
