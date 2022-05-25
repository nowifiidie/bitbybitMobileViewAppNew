import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native'
import React, { useState } from "react";
import RequestDetailCard from '../components/RequestDetailCard/RequestDetailCard';
import alert from '../alert';
import { useNavigation } from '@react-navigation/native';


 
const RequestDetailScreen = ({ route, navigation }) => {
   
    const assignPressed = () => {
        console.warn("Submit Update Profile");
        //validate user

        navigation.navigate('AssignVehicle');
    }
    const { item } = route.params;


    const showAlert = () => {
        console.log(234234);
        /*
        Alert.alert(
            "Confirmation",
            "Are You Sure",
            [
                {
                    text: "Confirm",
                    onPress: () => Alert.alert("Confirm Pressed"),
                    style: "confirm",
                },
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
            
        );
        */

    }

    return (
        <View>
            <RequestDetailCard>
                <Text>ID:{JSON.stringify(item.id)}</Text>
                <Text>TITLE:{JSON.stringify(item.title)}</Text>
                <Text>DATE:{JSON.stringify(item.date)}</Text>

                <View><Button title="Accept" onPress={assignPressed} /></View>

            </RequestDetailCard>

        </View>

    )
}

export default RequestDetailScreen

const styles = StyleSheet.create({

});