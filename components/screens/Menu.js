import React, { useContext } from "react";
import { View, StyleSheet, Text, Pressable,Platform } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from "../routes/NativeStackNavigator";


const shareApp = async () => {
  const dataToShare = {
    title: 'Freelancing or Gig app',
    text: 'Check out this freelancing or gig app you may like it.',
    url: Platform.OS==='web' ? window.location.origin :"https://mujaware.com"
  }
  if (navigator.share) {
    try {
      await navigator.share(dataToShare);
    } catch (error) {
      console.warn(error);
    }
  }
}

const Menu = ({ navigation: { navigate } }) => {
  const { signOut } = useContext(AuthContext)
  return (
    <View style={styles.center}>
      <Pressable
        onPress={
          async () => {
          navigate('Root',{screen:"Explore"});
          await signOut();
        }
        }
        title='Log out'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="logout" color="white" size={12} /> Log Out</Text></Pressable>

      <Pressable
        onPress={
          async () => {
         await shareApp();
        }
        }
        title='Share'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="share" color="white" size={12} />  Share</Text></Pressable>
      <Pressable
        onPress={() => shareApp()}
        title='Share'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="info" color="white" size={12} /> About</Text></Pressable>
      <Pressable
        onPress={() => shareApp()}
        title='Share'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="mail" color="white" size={12} /> Contact</Text></Pressable>
      <Pressable
        onPress={() => shareApp()}
        title='Share'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="person" color="white" size={12} /> Account</Text></Pressable>
      <Pressable
        onPress={() => shareApp()}
        title='Share'
        style={{ backgroundColor: 'brown', borderRadius: 20, marginBottom: 5 }}
      ><Text style={{ color: 'white', padding: 10, width: 200 }}><MaterialIcons name="info" color="white" size={12} /> Blog</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
  },
});

export default Menu;
