import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';

export default function AppRoutes() {

    const AppStack = createStackNavigator();

 return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
  );
}