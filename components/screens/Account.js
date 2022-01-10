import React, { useContext } from "react";
import { View, StyleSheet, Text, Pressable, Button,Image } from "react-native";
import Browser from "../widgets/Browser";

const Account = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Account Screen screen</Text>

      <View>
        <Image source={require("../../assets/splash.png")}  style={styles.avatar} />
        <Text style={styles.title}>Aliyu Bello</Text>
      </View>

      <View>
        <Text style={styles.title}>Default Currency</Text>
        <View><Text>GBP</Text><Text>EUR</Text><Text>USD</Text></View>
      </View>

      <View>
        <Text style={styles.title}>Account</Text>
        <Pressable onPress={()=>{}}>
          <Text>Email</Text>
          <Text>screen@account.com</Text>
        </Pressable>

        <Pressable onPress={()=>{}}>
          <Text>Password</Text>
        </Pressable>

        <Text>This is the Account Screen screen</Text>
        <Browser url={'https://mujaware.com'} title="Terms and Conditions" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  textName: {
    textAlign:'center'
  },
  title: {
    fontFamily: 'bold',
  }
});

export default Account;
