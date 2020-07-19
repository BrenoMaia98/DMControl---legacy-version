import React from 'react';
import { View, Dimensions } from 'react-native';
import { Row } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';

import { IconEnum } from '../../Utils/PickIcon/types';
import {
  ContainerInfo,
  RowAlign,
  InfoText,
  GreenText,
  Quantity,
  BloodSugarLevel,
  InsulinDosageText,
  MarginTop,
  InsulinDosageContainer,
} from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'InsulinDosage'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
type InsulinInputs = {
  checked: boolean;
  units: string;
  hoursAgo: string;
  minutesAgo: string;
};

type IdealBloodSugar = { minimal: string; maximum: string };
const InsulinDosage: React.FC<Props> = ({ navigation }) => {
  const languageScreen = Strings.InsulinDosage.English;
  const {
    Betweenlevels,
    ButtonActionScreen,
    GreenText: greenText,
    Header,
    Info01,
    Info02,
    Info03,
    Info04,
  } = languageScreen;
  const [bloodSugarLevels, setBloodSugarLevels] = React.useState<
    IdealBloodSugar
  >({ maximum: '', minimal: '' });

  const getIdealBloodSugarLevels = (): IdealBloodSugar => {
    return { minimal: '80', maximum: '120' };
  };

  const calculateInsulinUnits = (): string => {
    return '7';
  };

  React.useEffect(() => {
    setBloodSugarLevels(getIdealBloodSugarLevels());
  }, []);

  return (
    <View style={{ height: Dimensions.get('screen').height }}>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.Pill}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.Pill,
            iconSize: 'md',
            onPress: () => navigation.navigate('Menu'),
            text: ButtonActionScreen,
          },
        }}
      />
      <ContainerInfo bgc="#dfe6ed">
        <GreenText>{greenText}</GreenText>
        <InfoText>{Info01}</InfoText>
        <RowAlign>
          <Quantity>
            <BloodSugarLevel>{bloodSugarLevels.minimal}</BloodSugarLevel>
          </Quantity>
          <InfoText>{Betweenlevels}</InfoText>
          <Quantity>
            <BloodSugarLevel>{bloodSugarLevels.maximum}</BloodSugarLevel>
          </Quantity>
        </RowAlign>
      </ContainerInfo>
      <MarginTop>
        <InfoText>{Info02}</InfoText>
        <InfoText>{Info03}</InfoText>
        <InsulinDosageContainer>
          <InsulinDosageText>{calculateInsulinUnits()}</InsulinDosageText>
          <InfoText>{Info04}</InfoText>
        </InsulinDosageContainer>
      </MarginTop>
    </View>
  );
};

export default InsulinDosage;
