import React from "react";
import * as S from "./styles";

export default function Header({ title }) {
  return (
    <S.Background>
      <S.Title>{title}</S.Title>

    </S.Background>
  );
}
