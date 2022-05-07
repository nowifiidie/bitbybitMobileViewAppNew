import { SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native'
import React, { useState } from 'react'


const NofiticationScreen = ({navigation}) => {
  const [dataSource, setDataSource] = useState([
    { id: "B010", title: 'Text' },
    { id: 2, title: 'Text' },
    { id: 3, title: 'Text' },
  ]);

  const EmptyListMessage = ({ item }) => {
    return (
      
      // Flat List Item
      <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
        No Data Found
      </Text>
    );
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={styles.itemStyle}>
        <Text>
        Booking ID: {item.id}
      </Text>
      <Text  >
        {item.title.toUpperCase()}
      </Text>
      </View>
      
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          
          width: '100%',
          backgroundColor: '##6e3b6e',
        }}
      />
    );
  };

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>NOFITICATION</Text>
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:'#f9c2ff',
  },
  headerStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
  },
  textStyle: {
    textAlign: 'center',
    color: '#FF00FF',
    fontSize: 18,
    padding: 7,
  },
});

export default NofiticationScreen;


