
import React, { useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';


export const ActivityContext = createContext({});


export default function ActivityProvider({ children }){

    const [textInput, setTextInput] = useState();
    const [dataActivity, setDataActivity] = useState([
        {
            id: 0, 
            nome: 'Criar exercícios de matemática',
            descricao: 'Fazer exercícos de soma, subtração, multiplicação, divisão',
            responsavel: 'Pedro',
            createdAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            modificatedAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            status: 'Pendente'
        }
    ]);

    const activityFilter = async () => {

    }

    return (
        <ActivityContext.Provider value={{ activityFilter, textInput,
        setTextInput, dataActivity }}>
            {children}
        </ActivityContext.Provider>
    );
}