import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer}>
          <Text style={styles.txt}>Components</Text>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  drawer: {
    backgroundColor: '#8338ec',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    borderBottomColor: '#1d2d44',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },

  txt: {
    fontSize: 25,
    color: '#fff',
  }

});

export default CustomDrawer