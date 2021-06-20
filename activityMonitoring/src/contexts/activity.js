
import React, { useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';


export const ActivityContext = createContext({});


export default function ActivityProvider({ children }){

    const [textInput, setTextInput] = useState();
    const [dataActivity, setDataActivity] = useState([
        {
            id: 0, 
            name: 'Criar exercícios de matemática',
            description: 'Fazer exercícos de soma, subtração, multiplicação, divisão',
            responsible: 'Pedro',
            createdAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            modificatedAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            status: 'Pendente'
        }
    ]);
    const [arrayStatus, setArrayStatus] = useState([
        {id:0, nome: 'Pendente'},
        {id:1, nome: 'Em Andamento'},
        {id:2, nome: 'Finalizada'},
        {id:3, nome: 'Cancelada'},
      ])

    const activityFilter = async () => {

    }


    const activityEdit = async () => {

    }


    return (
        <ActivityContext.Provider value={{ activityFilter, textInput,
        setTextInput, dataActivity , activityEdit, arrayStatus, 
        setDataActivity }}>
            {children}
        </ActivityContext.Provider>
    );
}