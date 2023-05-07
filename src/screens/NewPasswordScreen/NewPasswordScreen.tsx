import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSigninButton from '../../components/SocialSigninButtons/Index';
import { useNavigation } from '@react-navigation/core'
interface SigninScreenProps {}

const NewPasswordScreen = (props: SigninScreenProps) => {
  const [code, setCode] = React.useState('');
  const [Password, setPassord] = React.useState('');
  const navigation = useNavigation();
  
    const onSubmitPressed = () =>{
        navigation.navigate("Home");
    }
   
    const onSigninPress = ()=>{
      navigation.navigate("Signin");
    }
  
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Reset Your Password </Text>
      <CustomInput placeholder='Code' value={code} setValue={setCode} secureTextEntry={false}/>
      <CustomInput placeholder='Enter your new Password' value={Password} setValue={setPassord } secureTextEntry={false}/>
     <CustomButton text="Submit" onPress={onSubmitPressed} />
      <CustomButton text="Back to Signin" onPress={onSigninPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
