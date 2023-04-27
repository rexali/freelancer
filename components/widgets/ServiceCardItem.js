import React from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

  export default function ServiceCardItem ({ name, location, price, id, navigation: { navigate }, data }){
    return (
      <View key={id} style={styles.container}>
        <View style={styles.freelanceInfo} >
          <TouchableHighlight
          onPress={() => navigate("Offerdetail", { id: id, name: name?name:'Aliyu B.', data })}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          >
          <View style={styles.freelanceInfo}>
            <Image source={require("../../assets/splash.png")} style={styles.avatar} />
            <View>
              <Text style={styles.textname} numberOfLines={1}>{name?name:'Aliyu B'}</Text>
              <Text style={styles.textlocation} numberOfLines={1}>{location}{" State"} </Text>
            </View>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={styles.textfavourite} onPress={()=>alert("I'm the favourite button")}><MaterialIcons name="favorite-border" color="red" size={25} /></Text>
            <Text style={styles.textprice}>{"N "}{price} {"/hr"} </Text>
          </View>
        </View> 
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  freelanceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  textname: {
    fontSize: 10,
    width:100,
  },
  textlocation: {
    fontSize: 10,

  },
  textprice: {
    fontSize: 10,

  },
  textfavourite: {
    fontSize: 10,
  },
  textPosition: {
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
