import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
// import MainNavigation from './navigations/MainNavigation';
import Mainnav from './navigations/MainNav';
import MainNavigation from './navigations/MainNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './store/centralStore';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister} loading={null}>
        <NavigationContainer>
          <Mainnav />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
