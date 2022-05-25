import React, { useState } from 'react'
import { Text, View, Button, Alert } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { useNavigation } from '@react-navigation/native';
// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
    {
        item: 'Gary',
        id: 'GR',
    },
    {
        item: 'Peter',
        id: 'RM',
    },
    {
        item: 'Pepeg',
        id: 'BR',
    },
    {
        item: 'Budok',
        id: 'BDK',
    },
    {
        item: 'Loda',
        id: 'LD',
    },
    {
        item: 'Grim',
        id: 'GM',
    },

]


function App() {

    const [selectedTeam, setSelectedTeam] = useState({})
    const navigation = useNavigation();
    const assignPressed = () => {
        console.warn("Assign Vehicle");
        //validate user

        navigation.navigate('Home');
    }
    const showAlert = () => {
        console.log(234234);

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

        assignPressed();
    }
    return (
        <View style={{ margin: 30 }}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, paddingBottom: 20 }}>Driver</Text>
            </View>
            <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Driver</Text>
            <SelectBox
                label="Select single driver:"
                options={K_OPTIONS}
                value={selectedTeam}
                onChange={onChange()}
                hideInputFilter={false}
            />
            <View><Button title="Next" onPress={showAlert} /></View>
        </View>


    )



    function onChange() {
        return (val) => setSelectedTeam(val)
    }
}

export default App