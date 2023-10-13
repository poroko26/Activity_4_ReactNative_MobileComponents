import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const MyComponent = () => (
  <View>
    <Text style={{padding: 10}}>Lemon</Text>
    <Divider />
    <Text style={{padding: 10}}>Mango</Text>
    <Divider />
    <Text style={{padding: 10}}>Tomato</Text>
    <Divider />
    <Text style={{padding: 10}}>Watermelon</Text>
    <Divider />
    <Text style={{padding: 10}}>Star Apple</Text>
    <Divider />
  </View>
);

export default MyComponent;