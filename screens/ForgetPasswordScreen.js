import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();



  const onConfirmPasswordPressed = () => {
    console.warn("Confirm Password Reset");

    navigation.navigate('Login');
  }

  return (
    <View style={styles.root}>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder="Re-Enter Password" value={password1} setValue={setPassword1} secureTextEntry={true} />

      <CustomButton text="Confirm Password" onPress={onConfirmPasswordPressed} />
  
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  


})
export default ForgetPassword

