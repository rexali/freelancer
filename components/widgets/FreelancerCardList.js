import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const FreelancerCardList = () => {
  return (
    <View style={styles.center}>
      <Text>This is the list of freelancers</Text>
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

export default FreelancerCardList;
