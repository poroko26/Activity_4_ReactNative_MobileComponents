import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Tooltip, Provider as PaperProvider } from 'react-native-paper';

const MyComponent = () => (
  <PaperProvider>
    <View style={styles.container}>
      <View style={styles.tooltipContainer}>
        <Tooltip style={styles.tooltip} visible={true} content={<View style={styles.tooltipContent}><IconButton icon="camera" size={24} /></View>}>
          <IconButton icon="camera" selected size={24} onPress={() => {}} />
        </Tooltip>
      </View>
      <View style={styles.tooltipContainer}>
        <Tooltip style={styles.tooltip} visible={true} content={<View style={styles.tooltipContent}><IconButton icon="image" size={24} /></View>}>
          <IconButton icon="image" selected size={24} onPress={() => {}} />
        </Tooltip>
      </View>
      <View style={styles.tooltipContainer}>
        <Tooltip style={styles.tooltip} visible={true} content={<View style={styles.tooltipContent}><IconButton icon="map" size={24} /></View>}>
          <IconButton icon="map" selected size={24} onPress={() => {}} />
        </Tooltip>
      </View>
      <View style={styles.tooltipContainer}>
        <Tooltip style={styles.tooltip} visible={true} content={<View style={styles.tooltipContent}><IconButton icon="music" size={24} /></View>}>
          <IconButton icon="music" selected size={24} onPress={() => {}} />
        </Tooltip>
      </View>
    </View>
  </PaperProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    margin: 20,
  },
  tooltip: {
    backgroundColor: '#333',
  },
  tooltipContent: {
    padding: 10,
  },
});

export default MyComponent;
