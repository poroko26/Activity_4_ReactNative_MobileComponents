import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider as PaperProvider, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
        >
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="undo" size={24} color="white" /> Undo</Text>}
          />
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="redo" size={24} color="white" /> Redo</Text>}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="content-cut" size={24} color="white" /> Cut</Text>}
          />
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="content-copy" size={24} color="white" /> Copy</Text>}
          />
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="content-paste" size={24} color="white" /> Paste</Text>}
          />
          <Menu.Item
            onPress={() => {}}
            title={<Text style={{ flexDirection: 'row', alignItems: 'center' }}><MaterialCommunityIcons name="share-variant" size={24} color="white" /> Share</Text>}
          />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;
