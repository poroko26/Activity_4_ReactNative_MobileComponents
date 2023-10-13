import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const ScrollViewExample = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image source={require('../ScrollViewCon/Picture/mali-mali.jpg')} style={styles.image} />
        <Text style={styles.title}> Mali-mali (Leea guineensis)</Text>
        <Text style={styles.description}>
          That said, Philippine Native Trees does sell potted seedlings that can also work beautifully indoors for a few years. One of the plants that are popular for their ornamental feature is the Leea guineensis, which is sometimes called mali-mali. Although a perennial plant, the mali-mali can stay up to eight years potted indoors.
        </Text>
      </View>
      <View style={styles.section}>
        <Image source={require('../ScrollViewCon/Picture/bitaog.jpg')} style={styles.image} />
        <Text style={styles.title}>Bitaog (Calophyllum inophyllum)</Text>
        <Text style={styles.description}>
          Aside from the Monstera deliciosa, the Ficus elastica (rubber fig tree) has also gained traction last year. A good alternative to this is the bitaog, with its leathery foliage that gives off that statement shine we all love.
        </Text>
      </View>
      <View style={styles.section}>
        <Image source={require('../ScrollViewCon/Picture/tibatib.jpg')} style={styles.image} />
        <Text style={styles.title}>Tibatib (Epipremnum pinnatum)</Text>
        <Text style={styles.description}>
          Tibatib is sometimes called the “Monstera of the Philippines,” but only because of how it looks. This endemic plant belongs to a different species altogether, although it grows just as fast as the former. Its leaves have the potential to grow huge too, especially when you let them climb.
        </Text>
      </View>
  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    padding: 10,
  },
});

export default ScrollViewExample;

