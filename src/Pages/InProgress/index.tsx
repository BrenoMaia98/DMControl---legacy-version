import React from 'react';
import { View, Text } from 'react-native';
import { FaTools } from 'react-icons/fa';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';
import DefaultButton from '../../Components/DefaultButton';
import { Container } from './styles';
import { IconEnum } from '../../Utils/PickIcon/types';
import { ColorPallet } from '../../Constants/ColorPallet';

type InProgressNavigationProp = StackNavigationProp<StackProps, 'InProgress'>;

type Props = {
  navigation: InProgressNavigationProp;
};
const InProgress: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: '2em',
          color: ColorPallet.purple,
          fontWeight: 'bold',
        }}
      >
        Work in Progress
      </Text>
      <FaTools size={200} color={ColorPallet.purple} />
      <DefaultButton
        onPress={() => navigation.pop()}
        iconLeft={IconEnum.FaArrowLeft}
        buttonSize="large"
        text="Back"
      />
    </Container>
  );
};
export default InProgress;