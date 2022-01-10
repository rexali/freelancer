import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Offers = ({navigation, route}) => {
  const data = ['Web editing', 'web designing', 'web repair', 'web maintenace', 'web security'];
  return (
    <View style={styles.center}>
      <Text>This is the user profile screen</Text>
      <Text>Title: {route.params.title}</Text>
      {data.map((skill, i) => <View key={i + 'kkk'} style={{minWidth:360}}><Text style={{minWidth:360}}>{skill}</Text></View>)}
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

export default Offers;
