import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface CustomInputProps {
    value: string,
    setValue: any,
    placeholder: string,
    secureTextEntry: boolean

}

const CustomInput = ({value, setValue,placeholder,secureTextEntry}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue}  placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry}/>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor:'#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  input:{}
});
