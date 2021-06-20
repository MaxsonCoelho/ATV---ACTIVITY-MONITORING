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

  const {
    arrayStatus,
    activityAdd,
    activity,
    setActivity,
    description,
    setDescription,
    responsible,
    setResponsable,
    createdActivity,
    setCreatedActivity,
    status
  } = useContext(ActivityContext);

  const [title, setTitle] = useState("Adicionar Atividade");
  const [buttonTitle, setButtonTitle] = useState("Salvar");
  const [arrayLimitStatus, setArrayLimitStatus] = useState([]);

  // const executeUpdate = () => {
  //   activityEdit();
  // }

  const executeAdd = () => {
    activityAdd(activity, description, responsible, createdActivity, status);
    navigation.navigate('Home')
  };

  useEffect(() => {
    const limitStatus = () => {
      const status = arrayStatus.slice(0, 2);
      setArrayLimitStatus(status);
    };
    limitStatus();
  }, []);

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
          <S.TextInputActivity>Data de criação: {`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`}</S.TextInputActivity>
        </S.AreaInputs>
        <Status listStatus={arrayLimitStatus} />
        <S.AreaButton>
          <Button executeFunction={() => executeAdd()} title={buttonTitle} />
        </S.AreaButton>
        <S.ButtonGoBack onPress={() => navigation.goBack()}>
          <S.GoBack source={require("../../assets/goBack.png")} />
        </S.ButtonGoBack>
      </ScrollView>
    </S.Background>
  );
}
