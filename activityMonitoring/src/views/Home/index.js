import React, { useState, useContext } from "react";
import { Button } from "react-native";
import * as S from "./styles";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Status from "../../components/Status";
import Card from "../../components/Card";


export default function Home() {

  const { signOut } = useContext(AuthContext);
  
  const [titleHeader, setTitleHeader] = useState('Busca de atividades');
  const [arrayStatus, setArrayStatus] = useState([
    {id:0, nome: 'Pendente'},
    {id:1, nome: 'Em Andamento'},
    {id:2, nome: 'Finalizada'},
    {id:3, nome: 'Cancelada'},
  ])


  return (
    <S.Background>
      <Header title={titleHeader}/>
      <SearchInput />
      <Status listStatus={arrayStatus} />
      <Card />
      <S.AreaButtonAdd>
        <S.Button>
          <S.TitleButton>+</S.TitleButton>
        </S.Button>
      </S.AreaButtonAdd>
      <Button title="sair" color="#805BCF" onPress={() => signOut()} />
    </S.Background>
  );
}