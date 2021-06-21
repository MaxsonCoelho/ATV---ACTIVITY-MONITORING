import React, { useState, useContext } from "react";
import * as S from "./styles";
import { ScrollView } from "react-native";
import { ActivityContext } from "../../contexts/activity";
import { useNavigation, useRoute } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import Header from "../../components/Header";
import Status from "../../components/Status";
import Button from "../../components/Button";

export default function DetailsEditing() {
    
    const { dataActivity, setStatus, status, activitiesList } = useContext(ActivityContext);

  const navigation = useNavigation();
  const route = useRoute();
  const itemActivity = route.params.item;

  const [title, setTitle] = useState("Detalhes e Atualização");
  const [buttonTitle, setButtonTitle] = useState("Salvar");
  const [activity, setActivity] = useState(itemActivity.name);
  const [description, setDescription] = useState(itemActivity.description);
  const [responsible, setResponsable] = useState(itemActivity.responsible);
  const [createdAt, setCreatedAt] = useState(itemActivity.createdAt);
  const [idActivity, setIdActivity] = useState(itemActivity.id);
  const [modificatedAt, setModificatedAt] = useState(
    `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
  );


  const activityEdit = () => {

    const activityCollectionEdit = firestore().doc(`Activity/${idActivity}`);
    return firestore().runTransaction(async transaction => {
      const postSnapshot = await transaction.get(activityCollectionEdit);

      if(!postSnapshot.exists){
        alert('Esta Atividade Não Existe')
      }

      await transaction.update(activityCollectionEdit, {
        name: activity,
        description: description,
        responsible: responsible,
        modificatedAt: modificatedAt,
        status: status
      });
    }).then((response) => {
      console.log(response);
      setActivity("");
      setDescription("");
      setResponsable("");
      setStatus("");
      activitiesList();
      navigation.navigate('Home');
    })
    .catch((e) => console.error("Error found: ", e));
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
            Data de criação: {createdAt}
          </S.TextInputActivity>
        </S.AreaInputs>
        <Status/>
        <S.AreaButton>
          <Button executeFunction={() => activityEdit()} title={buttonTitle} />
        </S.AreaButton>
        <S.ButtonGoBack onPress={() => navigation.goBack()}>
          <S.GoBack source={require("../../assets/goBack.png")} />
        </S.ButtonGoBack>
      </ScrollView>
    </S.Background>
  );
}
