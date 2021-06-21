import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import { ScrollView } from "react-native";
import { ActivityContext } from "../../contexts/activity";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import Header from "../../components/Header";
import Status from "../../components/Status";
import Button from "../../components/Button";
import uuid from "react-native-uuid";

export default function Add() {
  const navigation = useNavigation();

  const { status, setStatus, arrayStatus, activitiesList } =
    useContext(ActivityContext);

  const [title, setTitle] = useState("Adicionar Atividade");
  const [buttonTitle, setButtonTitle] = useState("Salvar");
  const [activity, setActivity] = useState("teste");
  const [description, setDescription] = useState("teste");
  const [responsible, setResponsable] = useState("teste");
  const [createdActivity, setCreatedActivity] = useState(
    `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
  );
  const [idActivity, setIdActivity] = useState("")

  const activityAdd = () => {
    if (activity == "") {
      alert("Digite o nome da Atividade");
    } else if (description == "") {
      alert("Digite uma descrição");
    } else if (responsible == "") {
      alert("Digite um responsável");
    } else if (status == "") {
      alert("Escolha um status");
    } else {
      firestore()
      .collection('Activity')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id);
          setIdActivity(documentSnapshot.id)
        });
      });
      const activityCollection = firestore().collection("Activity");
      activityCollection
        .add({
          id: idActivity,
          name: activity,
          description: description,
          responsible: responsible,
          createdAt: createdActivity,
          modificatedAt: "Sem modificações",
          status: status,
        })
        .then(() => {
          setActivity("");
          setDescription("");
          setResponsable("");
          setStatus("");
          activitiesList();
          navigation.navigate("Home");
        })
        .catch((e) => console.error("Error found: ", e));
    }
  };

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
            Data de criação:{" "}
            {`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`}
          </S.TextInputActivity>
        </S.AreaInputs>
        <Status listStatus={arrayStatus} />
        <S.AreaButton>
          <Button executeFunction={activityAdd} title={buttonTitle} />
        </S.AreaButton>
        <S.ButtonGoBack onPress={() => navigation.goBack()}>
          <S.GoBack source={require("../../assets/goBack.png")} />
        </S.ButtonGoBack>
      </ScrollView>
    </S.Background>
  );
}
