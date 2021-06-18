import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../views/SignIn';
import Register from '../views/Register'

export default function AuthRoutes() {

    const AuthStack = createStackNavigator();

 return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="Cadastro" component={Register}/>
    </AuthStack.Navigator>
  );
}