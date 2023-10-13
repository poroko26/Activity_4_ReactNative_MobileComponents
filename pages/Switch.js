import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Switch</Text>
      <View style={styles.switchContainer}>
        <Text style={{marginRight: 10, fontSize: 20}}>Off</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{marginLeft: 10, fontSize: 20}}>On</Text>
      </View>
      <Text style={{marginTop: 10, fontSize: 30}}>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SwitchScreen;
