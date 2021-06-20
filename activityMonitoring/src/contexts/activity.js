import React, { useState, createContext } from "react";
import firestore from "@react-native-firebase/firestore";

export const ActivityContext = createContext({});

export default function ActivityProvider({ children }) {

    const activityCollection = firestore().collection('Activity');
    const [textInput, setTextInput] = useState();
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [responsible, setResponsable] = useState("");
    const [createdActivity, setCreatedActivity] = useState(`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    const [status, setStatus] = useState("");
    const [dataActivity, setDataActivity] = useState([
        {
        id: 0,
        name: "Criar exercícios de matemática",
        description: "Fazer exercícos de soma, subtração, multiplicação, divisão",
        responsible: "Pedro",
        createdAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
        modificatedAt: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
        status: "Pendente",
        },
    ]);
    const [arrayStatus, setArrayStatus] = useState([
        { id: 0, nome: "Pendente" },
        { id: 1, nome: "Em Andamento" },
        { id: 2, nome: "Finalizada" },
        { id: 3, nome: "Cancelada" },
    ]);

    const activityAdd = (activity, description, responsible, createdActivity) => {
        if(activity == ''){
            alert('Digite o nome da Atividade');
        }
        if(description == ''){
            alert('Digite uma descrição');
        }
        if(responsible == ''){
            alert('Digite um responsável');
        }
        activityCollection.add({
            name: activity,
            description: description,
            responsible: responsible,
            createdAt: createdActivity,
            status: status
        }).then(response => {
            console.log(response);
            setActivity("");
            setDescription("");
            setResponsable("");
            setStatus("");
        })
        .catch(e => console.error("Error found: ", e));
    };

    const activityFilter = async () => {};

    const activityEdit = async () => {};

    return (
        <ActivityContext.Provider
        value={{
            activityFilter,
            textInput,
            setTextInput,
            dataActivity,
            activityEdit,
            arrayStatus,
            setDataActivity,
            activityAdd,
            activity, 
            setActivity,
            description, 
            setDescription,
            responsible, 
            setResponsable,
            createdActivity, 
            setCreatedActivity,
            status,
            setStatus
        }}
        >
        {children}
        </ActivityContext.Provider>
    );
}
