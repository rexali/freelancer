import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";

const FinanceAdd = () => {
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState();
  return (
    <View style={styles.center}>
      <Text>This is the add-finance screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Button title="Add fund" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 220
  },
});

export default FinanceAdd;
