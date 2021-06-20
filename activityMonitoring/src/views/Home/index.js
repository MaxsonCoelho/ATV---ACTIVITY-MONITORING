import React, { useState, useContext } from "react";
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
  const { arrayStatus } = useContext(ActivityContext);
  
  const [titleHeader, setTitleHeader] = useState('Busca de atividades');
  

  return (
    <S.Background>
      <Header title={titleHeader}/>
      <SearchInput />
      <Status listStatus={arrayStatus} />
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