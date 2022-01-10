import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Chats = () => {
  return (
    <View style={styles.center}>
      <Text>This is the chat screen</Text>
      <View  style={{position:'absolute',bottom:0, left:0, right:0,marginBottom:2,}} >
      <TextInput
        placeholder="   Enter your message here"
        style={{height:50, borderWidth:1, borderColor:'black', margin:4}}
       />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default Chats;
