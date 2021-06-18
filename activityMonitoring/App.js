import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import AuthProvider from './src/contexts/auth';

export default function AuthRoutes() {


 return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#805BCF" barStyle="light-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}