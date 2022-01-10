import React from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

  export default function FreelancerCardItem ({ name, location, charge, phone, id, navigation: { navigate }, data }){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("Offerdetail", { id: id, name: name, data })}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <View style={styles.freelanceInfo} >
            <Image source={require("../../assets/splash.png")} style={styles.avatar} />
            <View>
              <Text style={styles.textname} numberOfLines={1}>{name}</Text>
              <Text style={styles.textlocation} numberOfLines={1}>{location}</Text>
            </View>
            <Text style={styles.textPosition} numberOfLines={1}>{"Web Developer"}</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.footer} >
          <Text style={styles.textprice} >{phone}</Text><Text style={styles.textfavourite}><MaterialIcons name="favorite-border" color="red" size={25} /></Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // width: 153,
    // marginRight:10,
    // justifyContent: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  freelanceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    //  width:320,
  },
  textname: {
    fontSize: 14
  },
  textlocation: {
    fontSize: 14

  },
  textprice: {
    fontSize: 10

  },
  textfavourite: {
    fontSize: 14,
  },
  textPosition: {
    fontSize: 14
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
