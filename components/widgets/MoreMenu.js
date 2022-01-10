import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function MoreMenu() {
  let [visible, setVisible] = useState();

 const hideMenu = (bol) => {
   setVisible(bol); 
 }

  const showMenu = (bol) => { 
    setVisible(bol); 
  }
 
  return (
      <Menu
        visible={visible}
        anchor={<MaterialIcons onPress={()=>showMenu(true)} name="more-vert" size={20} style={{padding:5}} />}
        onRequestClose={() => {hideMenu(false)}}
        style={{padding:10}}
        >
        <MenuItem onPress={() =>{ alert('menu 1')}}>Menu item 1</MenuItem>
        <MenuItem onPress={() =>{alert('menu 2')}}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={() =>{ alert('menu 3')}}>Menu item 4</MenuItem>
      </Menu>
  );
}