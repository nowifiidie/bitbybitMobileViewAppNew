import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react'
import Logo from '../assets/images/user-profile.jpg';
import EditProfileScreen from './EditProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const editProfilePressed = () => {
        console.warn("Edit Profile");
        //validate user

        navigation.navigate('EditProfile');
    }

    const { height } = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            <Text
                style={{
                    color: '#000',
                    fontSize: 18,
                    marginBottom: 50,
                }}>
                John Doe
            </Text>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>+0124567812</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.userBtn}
                onPress={() => editProfilePressed()}>
                <Text style={styles.userBtnTxt}>Edit</Text>
            </TouchableOpacity>
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
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },


})

export default ProfileScreen

