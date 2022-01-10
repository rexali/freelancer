import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image
} from "react-native";

const Profile = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the USER profile screen</Text>
      <View>
        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.title}>Aliyu Bello</Text>
        <Text>Software Developer</Text>
        <Text>Lagos, NG</Text>
      </View>

        <View>
        <Text style={styles.title}>Insight</Text>
        <Text>Projects listed: {"12"}</Text>
        <Text>Projects awarded: {"7"}</Text>
        <Text>Freelancers worked with:{"20"} </Text>
        <Text>Last project:{"Homenace"}</Text>
        <Text>Response time: Instantly</Text>
        </View>

        <View>
        <Text style={styles.title}>Skills</Text>
        <Text>Web design</Text>
        <Text>Graphic design</Text>
        <Text>Web Maintenace</Text>
        <Text>Mobile Development</Text>
        </View>
         
         <View>
        <Text style={styles.title}>About</Text>
        <Text>lorem ipseum lorem ipseum, lorem ipseum, lorem ipseum lorem ipseum</Text>
        <Text>lorem ipseum lorem ipseum, lorem ipseum, lorem ipseum lorem ipseum</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  textName:{
    fontFamily:''
  },
  title:{
    fontFamily:'bold',
  }
});

export default Profile;
