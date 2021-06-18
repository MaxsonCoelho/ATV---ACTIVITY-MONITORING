import React, { useState } from 'react';
import * as S from './styles';


export default function Button({title}) {

 return (
     <S.ViewButton>
       <S.TextButton>{title}</S.TextButton>
     </S.ViewButton>
  );
}