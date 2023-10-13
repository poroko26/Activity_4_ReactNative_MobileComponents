import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyComponent = () => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <TouchableOpacity onPress={() => console.log('Pressed')}>
    <View
      style={{
        backgroundColor: 'blue', 
        borderRadius: 5, 
        padding: 10, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        width: 100, 
      }}
    >
      <Text
        style={{
          color: 'white',
        }}
      >
        Press me
      </Text>
    </View>
  </TouchableOpacity>
  </View>
);

export default MyComponent;

