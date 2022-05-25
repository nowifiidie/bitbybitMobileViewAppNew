import React, { useState } from 'react'
import { Text, View,Button } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { useNavigation } from '@react-navigation/native';
// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'BUS',
    id: 'B1',
  },
  {
    item: 'VAN',
    id: 'V1',
  },
  {
    item: 'SMALL VAN',
    id: 'V2',
  },
  
]


function App() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const navigation = useNavigation();
  const assignPressed = () => {
    console.warn("Assign Driver");
    //validate user

    navigation.navigate('AssignDriver');
}
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>VEHICLE</Text>
      </View>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Vehicle</Text>
      <SelectBox
        label="Select single vehicle:"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View><Button title="Next" onPress={assignPressed} /></View>
    </View>

    
  )

 

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default App