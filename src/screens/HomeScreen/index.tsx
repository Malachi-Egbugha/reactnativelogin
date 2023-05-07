import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const {logout} = React.useContext(AuthContext);
  const signout = async () =>{
    await logout();
    navigation.navigate("Signin" as never);
  }
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CustomButton text="Sign Out" onPress={signout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
