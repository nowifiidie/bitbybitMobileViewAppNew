import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import RequestScreen from './RequestScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ForgerPasswordScreen from './ForgerPasswordScreen';
import HistoryScreen from './HistoryScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import LogoutScreen from './LogoutScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import NofiticationScreen from './NofiticationScreen';

const Drawer = createDrawerNavigator();



const HomeScreen = () => {
  return (


    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer {...props} initialRouteName="Home" />}>
      <Drawer.Screen name="Home" component={NofiticationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={22} color={color} />
          ),
        }} />

      <Drawer.Screen name="Request" component={RequestScreen} 
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
      <Drawer.Screen name="Logout" component={LogoutScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="log-out-sharp" size={22} color={color} />
        ),
      }}/>

    </Drawer.Navigator>



  );
}

export default HomeScreen;

const styles = StyleSheet.create({})