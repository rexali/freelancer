import React, { useState, useContext } from 'react';
import { View, Text, Linking, Alert } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from "../routes/NativeStackNavigator";
import * as WebBrowser from 'expo-web-browser';
import * as expoLinking from 'expo-linking';
import { onShare } from './Share';

const shareApp = async () => {
  const dataToShare = {
    title: 'Freelancing or Gig app',
    text: 'Check out this freelancing or gig app you may like it.',
    url: Platform.OS === 'web' ? window.location.origin : "https://mujaware.com"
  }
  if (navigator.share) {
    try {
      await navigator.share(dataToShare);
    } catch (error) {
      console.warn(error);
    }
  }
}

export default function MoreMenu({ navigation: { navigate } }) {
  let [visible, setVisible] = useState();
  const { signOut } = useContext(AuthContext);

  const hideMenu = (bol) => {
    setVisible(bol);
  }

  const showMenu = (bol) => {
    setVisible(bol);
  }

  const _handleOpenWithLinking = (url) => {
    Linking.openURL(url);
  };

  const _handleOpenWithWebBrowser = (url) => {
    WebBrowser.openBrowserAsync(url);
  };

  const _handlePress = (href) => {
    expoLinking.openURL(href);
  };

  return (
    <Menu
      visible={visible}
      anchor={<MaterialIcons onPress={() => showMenu(true)} name="more-vert" size={20} style={{ padding: 5 }} />}
      onRequestClose={() => { hideMenu(false) }}
      style={{ padding: 10 }}
    >
      <MenuItem onPress={onShare}>
        Share
      </MenuItem>

      <MenuItem onPress={() => { Alert.alert('Setting Clicked...') }}>
        Settings
      </MenuItem>

      <MenuItem onPress={() => { _handleOpenWithWebBrowser("https://mujaware.com") }}>
        About
      </MenuItem>

      <MenuItem onPress={() => { _handleOpenWithLinking("https://mujaware.com") }}>
        Services
      </MenuItem>

      <MenuItem onPress={
        async () => {
          navigate('Root', { screen: "Explore" });
          await signOut();
        }}>
        Sign out
      </MenuItem>


      <MenuDivider />

      <MenuItem onPress={() => { _handlePress("mailto:admin@mujaware.com") }}>
        Contact
      </MenuItem>

      <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}>
        Menu Item 2
      </MenuItem>

      <MenuItem disabled>Disabled Menu Item 2</MenuItem>

      <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}>
        Menu Item 3
      </MenuItem>
    </Menu>
  );
}