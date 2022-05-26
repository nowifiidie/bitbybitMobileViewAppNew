import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import RequestScreen from './screens/RequestScreen';
import HistoryScreen from './screens/HistoryScreen';
import NofiticationScreen from './screens/RequestScreen';
import RequestDetailScreen from './screens/RequestDetailScreen';
import HistoryDetailScreen from './screens/HistoryDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import AssignVehicle from './screens/AssignVehicle';
import AssignDriver from './screens/AssignDriver';
import SecurityQuestionScreen from './screens/SecurityQuestionScreen';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                < Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
                <Stack.Screen name="Request" component={RequestScreen} />
                <Stack.Screen name="History" component={HistoryScreen} />
                <Stack.Screen name="Nofitication" component={NofiticationScreen} />
                <Stack.Screen name="RequestDetail" component={RequestDetailScreen} />
                <Stack.Screen name="HistoryDetail" component={HistoryDetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="AssignVehicle" component={AssignVehicle} />
                <Stack.Screen name="AssignDriver" component={AssignDriver} />
                <Stack.Screen name="SecurityQuestion" component={SecurityQuestionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    },
});