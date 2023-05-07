import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthContextType{
    isLogin?: boolean,
    setIsLogin?:any,
    isLoading?: boolean,
    setIsLoading?: any,
    logout?: any,
    usertoken?: any,
    setUsertoken?: any
}
interface Props{
    children?: React.ReactNode
}
export const AuthContext = React.createContext<AuthContextType>({});

export const AuthProvider = ({children}:Props) =>{
    const [isLogin, setIsLogin] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [usertoken, setUsertoken] = React.useState(null);
   
const logout = async () =>{
     setUsertoken(null);
      await AsyncStorage.removeItem('token');
      setIsLogin(false);
      setIsLoading(false);
}
const isLoggedin = async () =>{
    const token:any = await AsyncStorage.getItem('token');
    if(token){
        setUsertoken(token);
        setIsLogin(true);

    }
    else{
        setIsLogin(false);

    }
}

React.useEffect(()=>{
    isLoggedin()
},[])
    return (
        <AuthContext.Provider value={{isLogin,setIsLogin,isLoading,setIsLoading,logout,usertoken, setUsertoken}}>
            {children}
        </AuthContext.Provider>
    )

}
