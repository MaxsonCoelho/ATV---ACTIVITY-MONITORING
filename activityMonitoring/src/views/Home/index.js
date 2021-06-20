import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
import * as S from "./styles";
import { AuthContext } from "../../contexts/auth";
import { ActivityContext } from "../../contexts/activity";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Status from "../../components/Status";
import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";


export default function Home() {

  const navigation = useNavigation();

  const { signOut } = useContext(AuthContext);
  const { arrayStatus, activitiesList, dataActivity } = useContext(ActivityContext);
  
  const [titleHeader, setTitleHeader] = useState('Busca de atividades');
  
  const executeReload = () => {
    activitiesList();
  }
    

  return (
    <S.Background>
      <Header title={titleHeader}/>
      <SearchInput />
      <Status />
      <S.AreaReload onPress={() => executeReload()}>
        <S.Reload source={require('../../assets/Reload.png')}/>
      </S.AreaReload>
      {dataActivity.length <= 0 &&
        (
          <View style={{alignItems:'center', justifyContent:'center', height:60}}>
            <Text style={{fontSize: 16, color:"#000", fontWeight:'bold'}}>No momento não existe nenhuma tarefa</Text>
          </View>
        )
      }
      <Card />
      <S.AreaButtonAdd>
        <S.Button onPress={() => navigation.navigate('Adicionar Atividade')}>
          <S.TitleButton>+</S.TitleButton>
        </S.Button>
      </S.AreaButtonAdd>
      <Button title="sair" color="#805BCF" onPress={() => signOut()} />
    </S.Background>
  );
}