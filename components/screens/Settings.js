import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Text>This is the setting screen</Text>
        <Pressable onPress={()=>navigation.navigate("Account", {})}>
          <Text>Account</Text>
        </Pressable>
        <Text>Help</Text>
        <Text>Terms {"&"} Conditions</Text>
        <Text>Leave Feedback</Text>
        <Text>Version: 1.0.0</Text>
      </View>

      <View style={styles.button}>
        <Button title="Log out" color="brown" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  button: {
    flex: 1
  },
});

export default Settings;
