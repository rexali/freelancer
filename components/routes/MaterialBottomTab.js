import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/About";

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}