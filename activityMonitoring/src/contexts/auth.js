
import React, { useState, createContext } from 'react';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext({});


export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);


    async function signUp(name, email, password) {

        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name
            })
            .then((response) => {
                console.log(response)
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email
                };
                setUser(data);
            })
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user , user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}