import React, { useState, useContext } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth';


export default function SignIn() {

  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [title, setTitle] = useState("Entrar");


  const executeLogin = () => {
    alert('aqui')
  }


  return (
    <S.Background>
      <S.AreaLogo>
        <S.Logo source={require("../../assets/Logo.png")} />
      </S.AreaLogo>
      <S.AreaInputs>
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
        <Button executeFunction={executeLogin} title={title} />
      </S.AreaButton>
      <S.AreaRegister onPress={() => navigation.navigate('Cadastro')}>
        <S.Register>Cadastre-se</S.Register>
      </S.AreaRegister>
      <S.Footer>
        <S.Forgot>Esqueci minha senha</S.Forgot>
      </S.Footer>
    </S.Background>
  );
}
