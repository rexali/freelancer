import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "../routes/StackNavigator";

const Admin = () => {
  return (
    <NavigationContainer>
     <StatusBar style="light" backgroundColor="blue" translucent={false} />
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Admin;
