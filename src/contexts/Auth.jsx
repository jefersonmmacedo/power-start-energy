import {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import api from '../services/api';
import apiGoogleReverse from '../services/apiGoogleReverse';
// import { socket } from '../services/websocket';
import {v4 as uuidv4} from 'uuid';
// import moment from 'moment';
import apiMail from '../services/apiMail';


const AuthContext = createContext({});

function AuthProvider({children}) {
  


    return(
        <AuthContext.Provider value={""}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}