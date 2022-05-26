import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import RequestScreen from './RequestScreen';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import ForgerPasswordScreen from './ForgetPasswordScreen';
import HistoryScreen from './HistoryScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import LogoutScreen from './LogoutScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import NofiticationScreen from './NofiticationScreen';
import LoginScreen from './LoginScreen';

const Drawer = createDrawerNavigator();



const HomeScreen = () => {
  return (


    <Drawer.Navigator useLegacyImplementation 
    drawerContent={props => <CustomDrawer {...props}  />}
    screenOptions={{drawerLabelStyle:{marginleft:-25}}}
    >
      <Drawer.Screen name="Nof" component={NofiticationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={22} color={color} />
          ),
        }} />

      <Drawer.Screen name="List of Request" component={RequestScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="information-circle-sharp" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Request History" component={HistoryScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="refresh-circle-sharp" size={22} color={color} />
        ),
      }}/>
    

    </Drawer.Navigator>



  );
}

export default HomeScreen;

const styles = StyleSheet.create({})