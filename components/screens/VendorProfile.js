import React from "react";
import { View, StyleSheet, Text } from "react-native";

const VendorProfile = () => {
  return (
    <View style={styles.center}>
      <Text>This is the vendor profile screen</Text>
    </View>
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

export default VendorProfile;
