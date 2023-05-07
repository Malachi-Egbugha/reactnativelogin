import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSigninButton from '../../components/SocialSigninButtons/Index';
import {useNavigation} from '@react-navigation/core';
interface SigninScreenProps {}

const SignupScreen = (props: SigninScreenProps) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');
   const navigation = useNavigation();
    const onRegisterPressed = () =>{
        navigation.navigate("ConfirmEmail");
    }
   
    const onSignin = ()=>{
      navigation.navigate("Signin");
    }
    const onTermsOfUsePress = () =>{
      console.warn("onPressed of Use")

    }
    const onPrivacyPress =() =>{
      console.warn("onPressed Privacy")

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Create an account</Text>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureTextEntry={false}/>
      <CustomInput placeholder='Email' value={email} setValue={setEmail} secureTextEntry={false}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder='Repeat Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
    <CustomButton text="Register" onPress={onRegisterPressed} />
    <Text style={styles.text} onPress={onTermsOfUsePress}>By registering, you confirm that you accept out 
    <Text style={styles.link} onPress={onPrivacyPress}>Terms of use</Text> and <Text style={styles.link}>privacy policy</Text></Text>
    <SocialSigninButton/>
   
    <CustomButton text="Have Account? Signin" onPress={onSignin} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  },
  text:{
    color: 'gray',
    marginVertical: 10
  },
  link:{
    color: '#FDB075'
  }
});
