import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './routes/StackNavigation';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
