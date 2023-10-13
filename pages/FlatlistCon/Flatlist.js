import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Nicole James Paguican',
    description: '1.5M Follower',
    image: require('../FlatlistCon/Picture/p1.jpg'), 
  },
  {
    id: '2',
    title: 'Rodel Garcia',
    description: '120K Follower',
    image: require('../FlatlistCon/Picture/p2.jpg'), 
  },
  {
    id: '3',
    title: 'Arnold James Felisilda',
    description: '18M Follower',
    image: require('../FlatlistCon/Picture/p3.jpg'), 
  },
  {
    id: '4',
    title: 'Marlon Carbonilla',
    description: '12M Follower',
    image: require('../FlatlistCon/Picture/p4.jpg'), 
  },
  {
    id: '5',
    title: 'Adrian Jane Tahil',
    description: '6.8M Follower',
    image: require('../FlatlistCon/Picture/p5.jpg'), 
  },
  {
    id: '6',
    title: 'Earl Mike Sarabia',
    description: '18.9M Follower',
    image: require('../FlatlistCon/Picture/p6.jpg'), 
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} /> {}
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  listContainer: {
    paddingVertical: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    padding: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default FlatListExample;


