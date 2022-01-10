import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import MoreMenu from "../widgets/MoreMenu";

export default function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
        <MoreMenu />
      </View>
    );
  }