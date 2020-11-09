import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import StackNavigation from './routes/StackNavigation';

export default function App(): JSX.Element {
  SQLite.enablePromise(true);
  SQLite.openDatabase(
    { name: 'DMControlDB', location: 'default' },
    () => {
      console.log('Open DB successfully! ♥');
    },
    (e) => {
      console.error("Open DB was'nt successfully t.t", e);
    }
  );

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
