import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Slider Value: {sliderValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setSliderValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SliderComponent;
