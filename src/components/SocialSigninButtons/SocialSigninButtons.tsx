import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
interface SocialSigninButtonsProps {}

const SocialSigninButton = () => {
  const onSignInFacebook =() =>{
    console.warn("facebook signin")
}
const onSignInGoogle =() =>{
    console.warn("Google signin")
}
const onSignInApple =() =>{
    console.warn("Apple signin")
}
  return (
    <>
    <CustomButton bgColor='#E7EAF4' fgColor='#4765A9' text="Sign In with Facebook" onPress={onSignInFacebook} type="TERTIARY"/>
    <CustomButton bgColor='#FAE9EA' fgColor='#DD4D44' text="Sign In with Google" onPress={onSignInGoogle} type="TERTIARY"/>
    <CustomButton bgColor='#e3e3e3' fgColor='#363636' text="Sign In with Apple" onPress={onSignInApple} type="TERTIARY"/>
    </>
  );
};

export default SocialSigninButton;

const styles = StyleSheet.create({
  container: {}
});
