import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rdBtn}>
      <Text style={styles.status}>Status:</Text>
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedOption === 'Option 1' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Option 1')}
        >
          <View style={styles.radioCircle}>
            {selectedOption === 'Option 1' && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>Single</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedOption === 'Option 2' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Option 2')}
        >
          <View style={styles.radioCircle}>
            {selectedOption === 'Option 2' && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>Married</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedOption === 'Option 3' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Option 3')}
        >
          <View style={styles.radioCircle}>
            {selectedOption === 'Option 3' && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>Divorced</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50
  },
  rdBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48cae4',
    width: 250,
    height: 250,
    borderRadius: 5
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#fff',
    width: 200,
    height: 40,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 5,
    borderColor: '#007AFF', // Customize the border color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF', // Customize the selected circle color
  },
  radioText: {
    fontSize: 16,
    color: 'black',
  },
});

export default RadioButton;







