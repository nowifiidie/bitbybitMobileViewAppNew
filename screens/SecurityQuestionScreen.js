import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SecurityQuestion = () => {
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();



  const onSubmitSecurityQeustion = () => {
    console.warn("Submit Security Question");

    navigation.navigate('ForgetPassword');
  }

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 30, paddingBottom: 20 }}>Answer all 3 Questions</Text>
      <Text>1. What is your favourite food?</Text>
      <CustomInput placeholder="Answer 1" value={answer} setValue={setAnswer} />
      <Text>2. What is your favourite color?</Text>
      <CustomInput placeholder="Answer 2" value={answer1} setValue={setAnswer1}  />
      <Text>3. What is your mother's nationality?</Text>
      <CustomInput placeholder="Answer 3" value={answer2} setValue={setAnswer2}  />
      <CustomButton text="Submit" onPress={onSubmitSecurityQeustion} />
  
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  


})
export default SecurityQuestion

