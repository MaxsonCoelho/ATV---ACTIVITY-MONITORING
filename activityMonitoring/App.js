import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function AuthRoutes() {


 return (
    <NavigationContainer>
        <StatusBar backgroundColor="#805BCF" barStyle="light-content" />
        <Routes/>
    </NavigationContainer>
  );
}