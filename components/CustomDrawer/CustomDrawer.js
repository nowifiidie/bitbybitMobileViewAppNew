import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation,StackActions } from '@react-navigation/native';




const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const onSignOutPressed = () => {
      console.warn("Sign In");
      //validate user

      navigation.navigate('Login');
  }

  const onProfilePressed = () => {
    console.warn("Profile");
    //validate user

    navigation.navigate('Profile');
}

    return (
        <View style={{flex:1}}>
       <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
          <TouchableOpacity onPress={() => onProfilePressed()} style={{paddingVertical: 15}}>
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/images/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
         
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            John Doe
          </Text>
         
        </ImageBackground>
        </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
          
        </View>
        
      </DrawerContentScrollView>
      <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
        
      <TouchableOpacity onPress={() => onSignOutPressed()} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="log-out-sharp" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>

    )
}



export default CustomDrawer

const styles = StyleSheet.create({})