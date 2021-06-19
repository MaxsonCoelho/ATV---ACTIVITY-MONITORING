import React, { useContext } from 'react';
import * as S from './styles';
import { ActivityContext } from '../../contexts/activity';


export default function SearchInput()  {

    const { textInput, setTextInput, activityFilter } = useContext(ActivityContext);

    return (
        <S.Background>
            <S.AreaInput>
                <S.Input onChangeText={(t) => setTextInput(t)} 
                placeholder="Digite uma atividade ou responsável"
                value={textInput} />
                <S.ButtonSearch onPress={activityFilter} >
                    <S.Search source={require('../../assets/Luneta.png')}/>
                </S.ButtonSearch>
            </S.AreaInput>
        </S.Background>
    )
}
    