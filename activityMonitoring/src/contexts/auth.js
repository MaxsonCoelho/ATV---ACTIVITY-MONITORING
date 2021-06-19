
import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';


console.disableYellowBox = true;

export const AuthContext = createContext({});


export default function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStorage = async () => {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false)
        }
        loadStorage();
    }, [])

    const signIn = async (email, password) => {
        if(email == ''){
            alert('Preencha o campo de e-mail');
        } 
        if(password == ''){
            alert('Preencha o campo de senha');
        }
        await auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                setLoading(false)
                alert('Bem vindo!');
                let data = {
                    uid: uid,
                    email: value.user.email,
                };
                setUser(data);
                storageUser(data);
                setLoading(false)
            })
        })
        .catch((error)=> {
            ErrorSignInValidate(error)
        });
    }

    const ErrorSignInValidate = (error) => {
        if (error.code === 'auth/user-not-found') {
        alert('Este usuário não existe!');
        }

        if (error.code === 'auth/invalid-email') {
        alert('Este e-mail está inválido!');
        }
        console.error(error);
    }
    
    
    const signUp = async (email, password, name) => {
        await auth().createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
            let uid = response.user.uid;
            alert('cadastro realizado com sucesso!');
            await firebase.database().ref("users").set({
                name: name
            }).then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: response.user.email
                };
                setUser(data);
                storageUser(data);
            });
        })
        .catch(error => {
            ErrorRegisterValidate(error)
        });
    }

    const ErrorRegisterValidate = (error) => {
        if (error.code === 'auth/email-already-in-use') {
        alert('Este e-mail já está em uso!');
        }

        if (error.code === 'auth/invalid-email') {
        alert('Este e-mail está inválido!');
        }
        console.error(error);
    }


    const storageUser = async (data) => {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }


    const signOut = async () => {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }


    return (
        <AuthContext.Provider value={{ signed: !!user , user, signUp, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}