import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Country:</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Philippines" value="option1" />
          <Picker.Item label="United States" value="option2" />
          <Picker.Item label="Japan" value="option3" />
          <Picker.Item label="China" value="option4" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  dropdownContainer: {
    paddingHorizontal: 10,
    elevation: 2, 
  },
  dropdown: {
    height: 40,
    color: 'black',
  },
});

export default Dropdown;

