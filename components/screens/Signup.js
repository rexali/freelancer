import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput
} from "react-native";
import { AuthContext } from "../routes/NativeStackNavigator";

const Signup = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [email, setEmail] = useState();
  const { signUp } = React.useContext(AuthContext);


  return (
    <View style={styles.center}>
      <Text>This is the sign up screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={setCpassword}
        value={cpassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        onChangeText={setCpassword}
        value={cpassword}
        placeholder="Confirm password"
        secureTextEntry
      />

      <Button title="Sign up" />
      {/* <Button title="Sign in" onPress={() => signUp({ username, password })} /> */}

      <View>
        <Text>Have an account? </Text>
        <Button title="Sign in" onPress={() => navigate('Signin', {})} />
      </View>
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

export default Signup;
