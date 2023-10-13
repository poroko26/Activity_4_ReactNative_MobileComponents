import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const data = [
  {
    title: 'The Cutest Animals',
    data: [
      { id: '1', text: 'Dog' },
      { id: '2', text: 'Cat' },
      { id: '3', text: 'Tiger' },
    ],
  },
  {
    title: 'My Favorite Fruits',
    data: [
      { id: '4', text: 'Grapes' },
      { id: '5', text: 'Lemon' },
      { id: '5', text: 'WaterMelon' },
    ],
  },
  {
    title: 'My Dream Country',
    data: [
      { id: '4', text: 'Switzerland' },
      { id: '5', text: 'Japan' },
      { id: '5', text: 'United States of Amerika' },
    ],
  },
];

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item.text}</Text>
  </View>
);

const renderSectionHeader = ({ section }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{section.title}</Text>
  </View>
);

const SectionListExample = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: '#48cae4',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    color: 'white',
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    padding: 10,
  },
});

export default SectionListExample;

