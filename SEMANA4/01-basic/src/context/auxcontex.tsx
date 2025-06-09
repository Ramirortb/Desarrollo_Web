import {createContext,useContext, useState, type PropswithChildren} from "React";

enum authStatus {autorized 
    checking ='checking' 
    autorizef='autorizef' 
    unautorize='unautorize'

interface AuthState{
    
    state: 'checking' 'autorizef' 'unautorize'
    user: string,
    perfil:number,
    empresa:string,
} 
}

export const authContext = createContext({});
export const useauthContext = () => useContext(AuthContext);
export const AuthProvider =({children}:PropswithChildren) => {
    
    

    useEffect(() => {
        setTimeout(() =>)

    }, )

    return{
         state: authStatus 
         user: administrador,
        perfil:1,
        empresa:iti,
    }
} 