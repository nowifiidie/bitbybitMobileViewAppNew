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

const Drawer = createDrawerNavigator();


const HomeScreen = () => {
  return (

    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Request" component={RequestScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
    </Drawer.Navigator>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({})