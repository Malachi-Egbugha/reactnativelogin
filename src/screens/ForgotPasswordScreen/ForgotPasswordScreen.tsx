import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSigninButton from '../../components/SocialSigninButtons/Index';
import {useNavigation} from '@react-navigation/core'
interface SigninScreenProps {}

const ForgotPasswordScreen = (props: SigninScreenProps) => {
  const [username, setUsername] = React.useState('');
  const navigation = useNavigation();
    const onSendPressed = () =>{
       navigation.navigate("NewPassword");
    }
   
    const onSigninPress = ()=>{
      navigation.navigate("Signin");
    }
  
  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Reset Your Password </Text>
      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureTextEntry={false}/>
     <CustomButton text="Send" onPress={onSendPressed} />
      <CustomButton text="Back to Signin" onPress={onSigninPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
