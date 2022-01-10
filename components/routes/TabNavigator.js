import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Finances from '../screens/Finances';
import Projects from '../screens/Projects';
import Messages from '../screens/Messages';

import colors from '../../utils/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: getTabBarIcon("house"),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: getTabBarIcon("mail-outline")
        }}
      />

      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: getTabBarIcon("work-outline"),
          tabBarLabelPosition: 'below-icon',
          headerRight: () => (<Pressable
            onPress={() => alert('This is a button!')}
            title='info'
            style={styles.button}><Text style={styles.buttonText}>Add</Text></Pressable>)
        }}
      />

      <Tab.Screen
        name="Saved"
        component={Favourites}
        options={{
          tabBarIcon: getTabBarIcon("favorite-border"),
          tabBarLabelPosition: 'below-icon'
        }}
      />

      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarIcon: getTabBarIcon("credit-card"),
          tabBarLabelPosition: 'below-icon'
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
    backgroundColor: 'white',
    padding: 5
  }
  ,buttonText:{
    color:'blue',
  }
})

export default BottomTabNavigator