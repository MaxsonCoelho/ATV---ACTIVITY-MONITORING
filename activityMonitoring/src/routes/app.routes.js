import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import DetailsEditing from "../views/DetailsEditing";
import ActivityProvider from "../contexts/activity";
import Add from "../views/Add";

export default function AppRoutes() {

  const AppStack = createStackNavigator();

  return (
    <ActivityProvider>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Adicionar Atividade" component={Add} />
        <AppStack.Screen name="Detalhes e Atualização" component={DetailsEditing} />
      </AppStack.Navigator>
    </ActivityProvider>
  );
}
