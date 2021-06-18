import React, { useState, useContext } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";


export default function Register() {

  const navigation = useNavigation();

  const { signUp } = useContext(AuthContext);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [title, setTitle] = useState("Cadastrar");


  const executeRegister = () => {
    signUp();
  }


  return (
    <S.Background>
      <S.AreaLogo>
        <S.Logo source={require("../../assets/Logo.png")} />
      </S.AreaLogo>
      <S.AreaInputs>
        <S.InputEmail
          onChangeText={(t) => setName(t)}
          placeholder="Nome"
          value={name}
        />
        <S.InputEmail
          onChangeText={(t) => setEmail(t)}
          placeholder="E-mail"
          value={email}
        />
        <S.InputPassword
          onChangeText={(t) => setPassword(t)}
          placeholder="Senha"
          value={password}
        />
      </S.AreaInputs>
      <S.AreaButton>
        <Button executeFunction={executeRegister} title={title} />
      </S.AreaButton>
      <S.AreaBack onPress={() => navigation.goBack()}>
        <S.Back>Voltar</S.Back>
      </S.AreaBack>
    </S.Background>
  );
}
