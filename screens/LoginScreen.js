import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';
import Logo from '../../mobileviewApp/assets/images/logo.png';
import CustomInput from '../../mobileviewApp/components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton';


const LoginScreen = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed =() =>{
        console.warn("Sign In");
    }

    const onForgotPasswordPressed =() =>{
        console.warn("Forgot Password");
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />


            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

            <CustomButton text="Sign in" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
    }



})

export default LoginScreen

