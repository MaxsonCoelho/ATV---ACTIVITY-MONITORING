import React from "react";
import * as S from './styles';


export default function Button({title, executeFunction}) {

 return (
     <S.ViewButton onPress={executeFunction}>
       <S.TextButton>{title}</S.TextButton>
     </S.ViewButton>
  );
}