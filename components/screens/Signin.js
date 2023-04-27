import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Platform,
} from "react-native";
import { AuthContext } from "../routes/NativeStackNavigator";
import { useMediaQuery } from "react-responsive";
import { useNavigation } from "@react-navigation/native";

const Signin = ({ navigation, route }) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = React.useContext(AuthContext);
  const isMobileDevice = useMediaQuery({
    maxDeviceWidth: 1023,// alternatively..// query: "(max-device-width: 1224px)"
  });
  let nav = useNavigation();

  return (
    <View style={styles.center}>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
        keyboardType='default'
        secureTextEntry={true}
      />

      <Button
        title="Sign in"
        onPress={async () => {
          await signIn({ email, password });
          if (Platform.OS === 'web') {
            nav.navigate(route.params?.page ? route.params?.page : 'Home', {});
          }
        }} />
      <View>
        <Text>Don't have an account? </Text>
        <Button title="Sign up" onPress={() => navigation.navigate('Signup', {})} />
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

export default Signin;
