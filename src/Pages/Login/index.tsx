import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../routes/StackNavigation';
import IconButton from '../../Components/IconButton';
import { IconEnum } from '../../Utils/PickIcon/types';
import DefaultButton from '../../Components/DefaultButton';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import PickIcon from '../../Utils/PickIcon';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}
const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <TitleBar header={Strings.Login} titleIcon={PickIcon()} />
      <IconButton
        defaultIcon={IconEnum.FiEdit}
        onPress={() => {
          console.log('sdjkfhskdjfh');
        }}
      />
      <DefaultButton
        text="Calculate without meal"
        iconLeft={IconEnum.AiOutlinePlusCircle}
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
};

export default Login;
