import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../../routes/StackNavigation';
import IconButton from '../../Components/IconButton';
import { IconEnum } from '../../Utils/PickIcon/types';
import { ComponentSize } from '../../Utils/ComponentSize';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <IconButton
        IconColor="red"
        BackGroundColor="green"
        size={ComponentSize.sm}
        defaultIcon={IconEnum.FiEdit}
        onPress={() => {
          console.log('sdjkfhskdjfh');
        }}
      />
      <Button onPress={() => navigation.navigate('Menu')}>
        <Text>Menu</Text>
      </Button>
    </View>
  );
};

export default Login;
