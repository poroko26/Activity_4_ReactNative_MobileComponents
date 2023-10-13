import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyComponent = () => (
  <View style={styles.container}>
    <View style={styles.badge}>
      <View style={styles.forBadge}>
        <Text style={styles.badgeText}>3</Text>
      </View>
      <Icon name="bell-o" size={50} color="black" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: 'transparent',
    position:'absolute' ,
    borderRadius: 12,
    minWidth: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Change flexDirection to 'column'
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  forBadge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  }
});

export default MyComponent;


