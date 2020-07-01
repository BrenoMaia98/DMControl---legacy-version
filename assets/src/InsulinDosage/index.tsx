import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'InsulinDosage'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const InsulinDosage: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Menu')}>
        <Text>Return to Menu</Text>
      </Button>
    </View>
  );
};

export default InsulinDosage;
