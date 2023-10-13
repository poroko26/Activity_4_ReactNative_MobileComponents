import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MyComponent = () => {
  const [visible, setVisible] = useState(true);

  const handleBannerPress = () => {
    setVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleBannerPress}>
      {visible && (
        <View style={styles.banner}>
          <View style={styles.bannerIcon}>
            <Icon name="exclamation-circle" size={24} color="white"/>
          </View>
          <Text style={styles.bannerText}>
            There was a problem in connecting to your Account.
          </Text>
          <View style={styles.actions}>
            <Text style={styles.actionText}>Fix it</Text>
            <Text style={styles.actionText}>Learn more</Text>
          </View>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#ff9800', 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerIcon: {
    marginRight: 5
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  bannerText: {
    flex: 1,
    color: 'white', 
  },
  actions: {
    flexDirection: 'row',
  },
  actionText: {
    color: '#2196f3', 
    marginLeft: 16,
  },
});

export default MyComponent;
