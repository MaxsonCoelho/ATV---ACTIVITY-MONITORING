import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import { ScrollView } from "react-native";
import { ActivityContext } from "../../contexts/activity";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Status from "../../components/Status";
import Button from "../../components/Button";

export default function Add() {
  
  const navigation = useNavigation();

  const { dataActivity, activityEdit, arrayStatus } = useContext(ActivityContext);

  const [title, setTitle] = useState("Detalhes e Atualização");
  const [buttonTitle, setButtonTitle] = useState("Salvar");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsable] = useState("");
  const [arrayLimitStatus, setArrayLimitStatus] = useState([]);

  // const executeUpdate = () => {
  //   activityEdit();
  // }


  useEffect(() => {
    const limitStatus = () => {
      const status = arrayStatus.slice(2)
      setArrayLimitStatus(status)
    }
    limitStatus();
  }, [])

  return (
    <S.Background>
      <ScrollView>
        <Header goBack={() => navigation.goBack()} title={title} />
        <S.AreaInputs>
          <S.AreaInputActivity>
            <S.TextInputActivity>Atividade: </S.TextInputActivity>
            <S.InputActivity
              onChangeText={(t) => setActivity(t)}
              placeholder="Digite uma atividade"
              value={activity}
            />
          </S.AreaInputActivity>
          <S.AreaInputActivity>
            <S.TextInputActivity>Descrição: </S.TextInputActivity>
            <S.InputDescription
              multiline
              onChangeText={(t) => setDescription(t)}
              placeholder="Digite uma descrição detalhada"
              value={description}
            />
          </S.AreaInputActivity>
          <S.AreaInputActivity>
            <S.TextInputActivity>Responsável: </S.TextInputActivity>
            <S.InputResponsible
              onChangeText={(t) => setResponsable(t)}
              placeholder="Nome do responsável"
              value={responsible}
            />
          </S.AreaInputActivity>
          <S.TextInputActivity>
            Data de criação: 
          </S.TextInputActivity>
        </S.AreaInputs>
        <Status listStatus={arrayLimitStatus} />
        <S.AreaButton>
          <Button title={buttonTitle} />
        </S.AreaButton>
        <S.ButtonGoBack onPress={() => navigation.goBack()}>
          <S.GoBack source={require("../../assets/goBack.png")} />
        </S.ButtonGoBack>
      </ScrollView>
    </S.Background>
  );
}
