import * as React from 'react';
import { View, StyleSheet, Image, useWindowDimensions, ScrollView, ActivityIndicator } from 'react-native';
const Logo = require('../../../assets/images/logo.jpg');
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButtons';
import {useNavigation} from '@react-navigation/native';
import { signin } from '../../api/apicalls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';


interface SigninScreenProps {}

const SigninScreen = (props: SigninScreenProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {isLoading, setIsLoading,setUsertoken,setIsLogin} = React.useContext(AuthContext);
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = async () =>{
      //validate inout
      setIsLoading(true);
     const response:any= await signin(username,password);
     if(response.error){
      let error = response.error;
     }
     else{
      await AsyncStorage.setItem('token', response.token);
      setUsertoken(response.token);
      setIsLogin(true);
      setIsLoading(false);
      navigation.navigate('Home' as never);

     }
       
        
    }
    const isLoadings = () =>{
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', }}>
          <ActivityIndicator size={'large'}/>
        </View>
      )

  
    }
    const onForgetPasswordPressed = () =>{
        navigation.navigate("ForgotPassword" as never);

    }
    const onSignup = ()=>{
      navigation.navigate("Signup" as never);
    }
    return (
    isLoading ? isLoadings():
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo,{height:height * 0.3}]} resizeMode='contain'/>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureTextEntry={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
    <CustomButton text="Sign In" onPress={onSignInPressed} />
    <CustomButton text="Forgot Password" onPress={onForgetPasswordPressed} type="TERTIARY"/>

   <SocialSigninButton/>
    <CustomButton text="Don't have Account? Create One" onPress={onSignup} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo:{
    width: '70%',
    maxWidth: 500,
    maxHeight:200
  }
});
