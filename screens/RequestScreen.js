import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RequestDetailCard from '../components/RequestDetailCard/RequestDetailCard';


const NofiticationScreen = ({ navigation }) => {
  const [dataSource, setDataSource] = useState([
    { id: "B010", title: 'Text', date: '05-05-2022' },
    { id: 2, title: 'Text', date: '06-05-2022' },
    { id: 3, title: 'Text', date: '07-05-2022' },
  ]);

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.emptyListStyle} onPress={() => navigation.navigate('RequestDetail', item)}>
        No Data Found
      </Text>
    );
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View >
        <TouchableOpacity style={styles.itemStyle} onPress={() => navigation.navigate('RequestDetail', { item: item })}>
          <RequestDetailCard>
            <Text style={styles.itemStyle} >
              {item.id}
            </Text>
            <Text style={styles.itemStyle} >
              {item.title.toUpperCase()}
            </Text>
          </RequestDetailCard>

        </TouchableOpacity>
      </View>

    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>REQUEST</Text>
        <View style={styles.row}>
          <Text>
            <Text style={styles.text1}>Booking ID</Text>
            <Text style={styles.text2}>Date</Text>
          </Text>
        </View>

      </View>

    );
  };



  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        //Header to show above listview
        ListHeaderComponent={ListHeader}
        renderItem={ItemView}
        ListEmptyComponent={EmptyListMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  itemStyle: {
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  headerStyle: {
    width: '100%',
    height: 65,
    backgroundColor: '#FFF',
  },
  textStyle: {
    textAlign: 'center',
    color: '#FF00FF',
    fontSize: 18,
    padding: 7,
  },
  headerText: {
    flex: 1
  },
  row: {
    flexDirection: 'row',

  },
  text1: {
    textAlign: 'center',
    paddingRight: 270,

  },
  text2: {
    textAlign: 'right',
  },

});

export default NofiticationScreen;


