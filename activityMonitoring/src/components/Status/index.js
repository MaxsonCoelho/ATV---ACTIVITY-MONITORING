import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';
import { ActivityContext } from '../../contexts/activity';


export default function Status({listStatus}) {

    const { status, setStatus } = useContext(ActivityContext);
    
    const executeStatus = (item) => {
        setStatus(item);
    }

    return (
        <S.Background>
            <FlatList 
                data={listStatus}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <S.Button onPress={() => executeStatus(item.nome)}>
                            <S.Title>{item.nome}</S.Title>
                        </S.Button>
                    )
                }}
                keyExtractor={item => item.id}
            />

        </S.Background>
    )
}
    

    
