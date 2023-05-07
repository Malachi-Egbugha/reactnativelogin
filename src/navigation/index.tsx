import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginStack from './LoginStack';
import HomeStack from './HomeStack';
import { AuthContext } from '../context/AuthContext';



const Stack = createNativeStackNavigator();

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const {isLogin} = React.useContext(AuthContext);

  return (
    <NavigationContainer>
       {isLogin?<HomeStack/>:<LoginStack/>}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {}
});
