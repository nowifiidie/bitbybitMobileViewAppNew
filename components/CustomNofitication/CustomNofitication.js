import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomNofitication = ({value}) => {
  return (
    <View style={styles.container}>
            <Text>{value}</Text>
        </View>
  )
}

export default CustomNofitication

const styles = StyleSheet.create({})