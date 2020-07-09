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
  const languageScreen = Strings.Login.English;
  const {
    ChangeLanguage,
    Forgot,
    Login,
    LoginBtn,
    LoginFacebook,
    LoginGoogle,
    Password,
    Title,
  } = languageScreen;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <IconButton
        defaultIcon={IconEnum.FiEdit}
        onPress={() => {
          console.log('sdjkfhskdjfh');
        }}
      />
      <DefaultButton
        text={LoginBtn}
        buttonSize="large"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
};

export default Login;
