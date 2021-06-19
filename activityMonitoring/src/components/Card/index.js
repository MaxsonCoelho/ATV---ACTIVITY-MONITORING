import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';
import { ActivityContext } from '../../contexts/activity';


export default function Card() {

    const { textInput, setTextInput, 
            activityFilter, dataActivity } = useContext(ActivityContext);
    
    
    return (
        <S.Background>
            {console.log(dataActivity)}
            <FlatList 
                data={dataActivity}
                renderItem={({item}) => {
                    return (
                        <S.Card>
                            <S.Data>
                                <S.AreaData>
                                    <S.TitleData>Atividade: {item.nome}</S.TitleData>
                                    <S.TitleData>Atividade: {item.descricao}</S.TitleData>
                                    <S.TitleData>Atividade: {item.responsavel}</S.TitleData>
                                    <S.TitleData>Atividade: {item.createdAt}</S.TitleData>
                                    <S.TitleData>Atividade: {item.modificatedAt}</S.TitleData>
                                </S.AreaData>
                                <S.AreaButton>
                                    <S.Button>
                                        <S.ImageButton source={require('../../assets/touch.png')}/>
                                    </S.Button>
                                </S.AreaButton>
                            </S.Data>
                            <S.Status>
                                <S.ButtonStatus>
                                    <S.TitleStatus>{item.status}</S.TitleStatus>
                                </S.ButtonStatus>
                            </S.Status>
                        </S.Card>
                    )
                }}
                keyExtractor={item => item.id}
            />

        </S.Background>
    )
}
    

    
