import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

interface NavigationProps {}

const LoginStack = (props: NavigationProps) => {
  return (
  
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Signin' component={SigninScreen}></Stack.Screen>
            <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}></Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}></Stack.Screen>
            <Stack.Screen name='NewPassword' component={NewPasswordScreen}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
   
  );
};

export default LoginStack;


