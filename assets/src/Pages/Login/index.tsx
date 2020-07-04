import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackProps } from '../../../../routes/StackNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<StackProps, 'Login'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('Menu')}>
        <Text>Menu</Text>
      </Button>
    </View>
  );
};

export default Login;
