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
import OverlayModal from "../widgets/OverlayModal";
import ModalReal from "../widgets/ModalReal";
import TooltipModal from "../widgets/TooltipModal";
import DropdownPicker from "../widgets/DropdownPicker";

const Signin = ({ navigation, route }) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = React.useContext(AuthContext);
  const isMobileDevice = useMediaQuery({
    maxDeviceWidth: 1023,// alternatively..// query: "(max-device-width: 1224px)"
  });

  const loggedIn = () => {
    let logInObj = {
      email: email,
      password: password
    }
    console.log(logInObj);
    window.sessionStorage.setItem('user_id', email)
    window.location.reload();
    navigation.navigate(route.params.page)
  }

  return (
    <View style={styles.center}>
      <Text>This is the sign in screen</Text>
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

      {/* <OverlayModal overlayBody={"I am testing you oo, "} />
      <ModalReal />
      <TooltipModal toolTipBody={"I am the tool tip"} />
      <DropdownPicker /> */}

      {/* <Button title="Sign in" onPress={() => loggedIn()} /> */}
      <Button
        title="Sign in"
        onPress={() => {
          signIn({ email, password });
          !isMobileDevice ? 
          navigation.navigate(route.params.page?route.params.page:'Home', {}) 
          : () => {
            navigation.navigate('Home', {}) 
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
