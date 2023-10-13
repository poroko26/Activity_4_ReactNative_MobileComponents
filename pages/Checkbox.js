import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, CheckBox } from 'react-native';

const Forms = () => {
  const [isCheckedBasketball, setIsCheckedBasketball] = useState(false);
  const [isCheckedVolleyball, setIsCheckedVolleyball] = useState(false);
  const [isCheckedBadminton, setIsCheckedBadminton] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
      <Text style={styles.label}>Interests:</Text>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBasketball}
            onValueChange={() => setIsCheckedBasketball(!isCheckedBasketball)}
            style={styles.box}
          />
          <Text style={styles.checkBoxLabel}>Basketball</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedVolleyball}
            onValueChange={() => setIsCheckedVolleyball(!isCheckedVolleyball)}
            style={styles.box}
          />
          <Text style={styles.checkBoxLabel}>Volleyball</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedBadminton}
            onValueChange={() => setIsCheckedBadminton(!isCheckedBadminton)}
            style={styles.box}
          />
          <Text style={styles.checkBoxLabel}>Badminton</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 80,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'column',
    backgroundColor: '#48cae4',
    marginTop: 50,
    width: 250,
    height: 250,
    justifyContent: 'center',
    borderRadius: 10
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  checkBoxLabel: {
    marginLeft: 5,
    fontSize: 15,
  },
  box: {
    marginLeft: 5
  }
});

export default Forms;
