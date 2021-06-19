import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';
import { ActivityContext } from '../../contexts/activity';


export default function Status({listStatus}) {

    const { textInput, setTextInput, activityFilter } = useContext(ActivityContext);
    

    return (
        <S.Background>
            <FlatList 
                data={listStatus}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <S.Button >
                            <S.Title>{item.nome}</S.Title>
                        </S.Button>
                    )
                }}
                keyExtractor={item => item.id}
            />

        </S.Background>
    )
}
    

    
