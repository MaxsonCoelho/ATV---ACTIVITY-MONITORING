import React, { useContext, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import * as S from "./styles";
import { ActivityContext } from "../../contexts/activity";
import { useNavigation } from "@react-navigation/native";

export default function Card() {

  const navigation = useNavigation();

  const {
    dataActivity,
    activitiesList,
    loading,
    activity
  } = useContext(ActivityContext);

  useEffect(() => {
    activitiesList();
  }, [activity]);

  return (
    <S.Background>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#805BCF" />
        </View>
      ) : (
        <FlatList
          data={dataActivity}
          renderItem={({ item }) => {
            return (
              <S.Card>
                <S.Data>
                  <S.AreaData>
                    <S.TitleData>Atividade: {item.name}</S.TitleData>
                    <S.TitleData>Descrição: {item.description}</S.TitleData>
                    <S.TitleData>Responsável: {item.responsible}</S.TitleData>
                    <S.TitleData>Criação: {item.createdAt}</S.TitleData>
                    <S.TitleData>Modificado: {item.modificatedAt}</S.TitleData>
                  </S.AreaData>
                  <S.AreaButton>
                    <S.Button
                      onPress={() =>
                        navigation.navigate("Detalhes e Atualização", {
                          item: item,
                        })
                      }
                    >
                      <S.ImageButton
                        source={require("../../assets/touch.png")}
                      />
                    </S.Button>
                  </S.AreaButton>
                </S.Data>
                <S.Status>
                  <S.ButtonStatus>
                    <S.TitleStatus>{item.status}</S.TitleStatus>
                  </S.ButtonStatus>
                </S.Status>
              </S.Card>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </S.Background>
  );
}
