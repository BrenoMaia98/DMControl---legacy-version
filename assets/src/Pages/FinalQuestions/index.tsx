import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'FinalQuestions'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const FinalQuestions: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('InsulinDosage')}>
        <Text>Insulin Dosage</Text>
      </Button>
    </View>
  );
};

export default FinalQuestions;
