import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../assets/images/user-profile.jpg';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
    const navigation = useNavigation();
    const submitUpdateProfile = () => {
        console.warn("Submit Update Profile");
        //validate user

        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ImageBackground
                            source={Logo}
                            style={{ height: 100, width: 100 }}
                            imageStyle={{ borderRadius: 15 }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                    John Doe
                </Text>

            </View>
            <View style={styles.action}>
                <Icon name="email" color="#333333" size={20} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    autoCorrect={false}


                    style={styles.textInput}
                />
            </View>
          
          
            <View style={styles.action}>
                <Feather name="phone" color="#333333" size={20} />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    autoCorrect={false}


                    style={styles.textInput}
                />
            </View>

         
           <TouchableOpacity
                style={styles.userBtn}
                onPress={() => submitUpdateProfile()}>
                <Text style={styles.userBtnTxt}>Edit</Text>
            </TouchableOpacity>
           

        </View>
      
    );
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
         alignItems: 'center',
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
})