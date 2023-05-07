import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSigninButton from '../../components/SocialSigninButtons/Index';
import {useNavigation} from '@react-navigation/core'
interface SigninScreenProps {}

const ConfirmEmailScreen = (props: SigninScreenProps) => {
  const [code, setCode] = React.useState('');
  const navigation = useNavigation();
  
    const onConfirmPressed = () =>{
        navigation.navigate('Home');
    }
   
    const onSigninPress = ()=>{
      navigation.navigate('Signin');
    }
  
    const onResendPress =() =>{
      console.warn("onResendPress")

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Confirm your email</Text>
      <CustomInput placeholder='Enter your confirmation code' value={code} setValue={setCode} secureTextEntry={false}/>
     <CustomButton text="Confirm" onPress={onConfirmPressed} />
    <CustomButton text="Rescend Code" onPress={onResendPress} type="SECONDARY"/>
    <CustomButton text="Back to Signin" onPress={onSigninPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
