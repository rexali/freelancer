import React from "react";
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";


import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
// import MaterialTopTab from "./MaterialTopTab";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Dashboard" component={MaterialTopTab} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

