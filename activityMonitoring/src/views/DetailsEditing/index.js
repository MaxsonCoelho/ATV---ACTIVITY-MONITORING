import React, { useState, useContext } from "react";
import * as S from "./styles";
import { ScrollView } from "react-native";
import { ActivityContext } from "../../contexts/activity";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import Status from "../../components/Status";
import Button from "../../components/Button";

export default function DetailsEditing() {
  const { dataActivity, activityEdit, arrayStatus } = useContext(ActivityContext);

  const navigation = useNavigation();
  const route = useRoute();
  const itemActivity = route.params.item;

  const [title, setTitle] = useState("Detalhes e Atualização");
  const [buttonTitle, setButtonTitle] = useState("Salvar");
  const [activity, setActivity] = useState(itemActivity.name);
  const [description, setDescription] = useState(itemActivity.description);
  const [responsible, setResponsable] = useState(itemActivity.responsible);

  // const executeUpdate = () => {
  //   activityEdit();
  // }

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
            Data de criação: {itemActivity.createdAt}
          </S.TextInputActivity>
        </S.AreaInputs>
        <Status listStatus={arrayStatus} />
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
