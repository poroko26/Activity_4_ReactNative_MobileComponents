import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Avatar Text</Text>
    <View style={styles.avatarContainer}>
      <Text style={styles.avatarText}>AJ</Text>
    </View>
    <Text style={styles.title}>Avatar Image</Text>
    <View>
      <Image
        source={require('../AvatarCom/p1.jpg')} 
        style={styles.forImage}
      />
    </View>
    <Text style={styles.title}>Avatar Icon</Text>
    <View style={styles.forIcon}>
      <Icon name="user" size={30} color="blue" /> {}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'blue', 
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  avatarText: {
    color: 'white',
    fontSize: 25, 
  },
  forImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20
  },
  forIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default MyComponent;



