import React, { useState, useContext } from "react";
import { View, Text, Button } from "react-native";
import * as S from "./styles";
import { AuthContext } from "../../contexts/auth";


export default function Home() {

  const { signOut } = useContext(AuthContext);

 return (
     <View>
       <Text>Home</Text>
       <Button title="sair" onPress={() => signOut()} />
     </View>
  );
}