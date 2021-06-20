import React, { useState, createContext, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";


export const ActivityContext = createContext({});

export default function ActivityProvider({ children }) {
  const activityCollection = firestore().collection("Activity");
  const [textInput, setTextInput] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsable] = useState("");
  const [createdActivity, setCreatedActivity] = useState(
    `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
  );
  const [modificatedAt, setModificatedAt] = useState(
    `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
  );
  const [status, setStatus] = useState("");
  const [dataActivity, setDataActivity] = useState([]);
  const [idActivity, setIdActivity] = useState('');
  const [loading, setLoading] = useState(false);
  const [arrayStatus, setArrayStatus] = useState([
    { id: 0, nome: "Pendente" },
    { id: 1, nome: "Em Andamento" },
    { id: 2, nome: "Finalizada" },
    { id: 3, nome: "Cancelada" },
  ]);

  

  const activityFilter = () => {
    setLoading(true);
    if (textInput == "") {
      alert("Preencha o campo de busca");
      activitiesList();
    } else {
      console.log(textInput);
      firestore()
        .collection("Activity")
        .where("name", "==", textInput)
        .get()
        .then((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            console.log(doc);

            array.push({
              ...doc.data(),
            });
          });
          setDataActivity(array);
          setLoading(false);
        });
    }
  };

  const filterStatus = (item) => {
    setLoading(true);
    if (item === "Pendente") {
      firestore()
        .collection("Activity")
        .where("status", "==", item)
        .get()
        .then((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            array.push({
              ...doc.data(),
            });
          });
          setDataActivity(array);
          setLoading(false);
        });
    } else if (item === "Em Andamento") {
      firestore()
        .collection("Activity")
        .where("status", "==", item)
        .get()
        .then((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            array.push({
              ...doc.data(),
            });
          });
          setDataActivity(array);
          setLoading(false);
        });
    } else if (item === "Finalizada") {
      firestore()
        .collection("Activity")
        .where("status", "==", item)
        .get()
        .then((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            array.push({
              ...doc.data(),
            });
          });
          setDataActivity(array);
          setLoading(false);
        });
    } else {
      firestore()
        .collection("Activity")
        .where("status", "==", item)
        .get()
        .then((querySnapshot) => {
          const array = [];
          querySnapshot.forEach((doc) => {
            array.push({
              ...doc.data(),
            });
          });
          setDataActivity(array);
          setLoading(false);
        });
      setStatus("");
    }
  };

  const activitiesList = () => {
    setLoading(true);
    firestore()
      .collection("Activity")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({
            ...doc.data(),
          });
        });
        setDataActivity(array);
        setLoading(false);
      });
  };


  return (
    <ActivityContext.Provider
      value={{
        activityFilter,
        textInput,
        setTextInput,
        dataActivity,
        arrayStatus,
        setArrayStatus,
        setDataActivity,
        activity,
        setActivity,
        description,
        setDescription,
        responsible,
        setResponsable,
        createdActivity,
        setCreatedActivity,
        modificatedAt,
        setModificatedAt,
        status,
        setStatus,
        activitiesList,
        loading,
        filterStatus,
        idActivity, 
        setIdActivity
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}
