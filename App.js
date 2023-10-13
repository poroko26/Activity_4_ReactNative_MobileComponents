import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomDrawer  from './src/CustomDrawer';
import  Alert  from './pages/Alert';
import Modal from './pages/Modal';
import Tab from './pages/Tab/mainTab';
import Collapse from './pages/Collapse'
import InputText from './pages/InputText'
import Checkbox from './pages/Checkbox'
import RB from './pages/RadioBtn'
import Dropdown from './pages/Dropdown'
import Spinner from './pages/Spinner'
import Flatlist from './pages/FlatlistCon/Flatlist'
import ScrollView from './pages/ScrollViewCon/ScrollView'
import Sectionlist from './pages/Sectionlist'
import Switch from './pages/Switch'
import DrawerCom from './pages/DrawerCom'
import dt from './pages/DatePicker'
import avatar from './pages/AvatarCom/Avatar'
import badge from './pages/Badge'
import banner from './pages/Banner'
import btn from './pages/Button'
import card from './pages/CardCom/Card'
import chip from './pages/Chip'
import datatable from './pages/DataTable'
import divider from './pages/Divider'
import menu from './pages/Menu'
import Search from './pages/SeacrBar'
import tooltip from './pages/Tooltip'
import slider from './pages/Slider'



const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Alert" component={Alert} />
        <Drawer.Screen name="Avatar" component={avatar}/>
        <Drawer.Screen name="Badge" component={badge}/>
        <Drawer.Screen name="Banner" component={banner}/>
        <Drawer.Screen name="Button" component={btn}/>
        <Drawer.Screen name="Card" component={card}/>
        <Drawer.Screen name="Checkbox" component={Checkbox} />
        <Drawer.Screen name="Chip" component={chip}/>
        <Drawer.Screen name="Collapse" component={Collapse} />
        <Drawer.Screen name="Date" component={dt} />
        <Drawer.Screen name="Data Table" component={datatable}/>
        <Drawer.Screen name="Divider" component={divider}/>
        <Drawer.Screen name="Drawer" component={DrawerCom}/>
        <Drawer.Screen name="Dropdown" component={Dropdown} />
        <Drawer.Screen name="Flatlist" component={Flatlist}/>
        <Drawer.Screen name="Input Text" component={InputText} />
        <Drawer.Screen name="Menu" component={menu}/>
        <Drawer.Screen name="Modal" component={Modal} />
        <Drawer.Screen name="RadioButton" component={RB} />
        <Drawer.Screen name="Search Bar" component={Search}/>
        <Drawer.Screen name="Scroll View" component={ScrollView}/>
        <Drawer.Screen name="Section List" component={Sectionlist}/>
        <Drawer.Screen name="Slider" component={slider}/>
        <Drawer.Screen name="Spinner" component={Spinner}/>
        <Drawer.Screen name="Switch" component={Switch}/>
        <Drawer.Screen name="Tab" component={Tab} />
        <Drawer.Screen name="Tooltip" component={tooltip}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  },
});

