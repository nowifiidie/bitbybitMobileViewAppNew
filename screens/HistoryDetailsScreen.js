import { StyleSheet, Text, View, Button } from 'react-native'
import Reactfrom from "react";
import RequestDetailCard from '../components/RequestDetailCard/RequestDetailCard';

const RequestDetailScreen = ({ route, navigation }) => {
    const { item } = route.params;


    return (
        <View>
            <RequestDetailCard>
                <Text>ID:{JSON.stringify(item.id)}</Text>
                <Text>TITLE:{JSON.stringify(item.title)}</Text>
                <Text>BOOKED DATE:{JSON.stringify(item.date)}</Text>
            </RequestDetailCard>

        </View>

    )
}

export default RequestDetailScreen

const styles = StyleSheet.create({});