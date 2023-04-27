import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ratingStars } from "./Reviews";

const VendorDetail = ({ navigation }) => {
  const data = ['Web editing', 'web designing', 'web repair', 'web maintenace', 'web security'];
  return (
    <SafeAreaView style={styles.center}>
      <ScrollView>
        <Text>This is the user profile screen</Text>
        <Image source={require("../../assets/splash.png")} style={styles.cover} />

        <View style={styles.freelancer}>
          <Image source={require("../../assets/splash.png")} style={styles.avatar} />
          <View>
            <Text numberOfLines={1}>{"Daniel Usman"}</Text>
            <Text numberOfLines={1}>{"Web designer"}</Text>
            {ratingStars(5)}
            <Text>{"N300/hr"}</Text>
          </View>
        </View>

        <View style={{marginBottom:5}}>
          <Text style={styles.aboutText}>About</Text>
          <Text>
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
          </Text>

          <Text>
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
            Lorem icem, locrem ce nve venu cull Lorem icem, locrem ce nve venu cull, Lorem icem, locrem ce nve venu cull
          </Text>
        </View>

        <View style={{marginBottom:5}}>
          <Text><MaterialIcons name="star" /> {""} {"Respond instantly"}</Text>
          <Text><MaterialIcons name="person" />{""}  {"Lagos, NG"}</Text>
          <Text><MaterialIcons name="language" />{""}  {"Speak English"}</Text>
          <Text><MaterialIcons name="shopping-cart" />{""} Worked with {"100"} buyers</Text>
          <Text><MaterialIcons name="work" />{""}  {"100"} projects completed</Text>
        </View>

        <View style={{marginBottom:5}}>
          <Text style={styles.skillText}>Skills</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <View><Text ellipsizeMode='tail' numberOfLines={1}>{item}</Text></View>}
            keyExtractor={(index) => index}
          />
        </View>

        <View style={{marginBottom:5}}>
          <Text style={styles.offerText}>Offers</Text>
          {data.map((skill, i) => <View key={i + 'kkk'}><Text>{skill}</Text></View>)}
        </View>

        <View style={{marginBottom:5}}>
          <Text style={styles.portfolioText}>Portfolio</Text>
          {data.map((skill, i) => (
            <View key={i + 'xx'} style={{minWidth:360}}>
              <Text>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={{marginBottom:5}}>
          <Text style={styles.reviewText}>Reviews</Text>
          {data.map((skill, i) => <View key={i + 'cv'}><Text>{skill}</Text></View>)}
        </View>

      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Offerquestion', {})}
        title='Add a project'
        style={styles.button}><Text style={styles.buttonText}>Ask</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  cover: {
    minWidth: 360,
    height: 160,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 5,
    borderRadius: 20,
  },
  freelancer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    margin: 5,
  },
  aboutText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  skillText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  offerText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  reviewText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  portfolioText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  skill: {
    flexDirection: 'column',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'brown',
    right: 2,
    borderRadius: 15,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
});

export default VendorDetail;
