import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FreelancerCardItem from "../widgets/ServiceCardItem";

const Favourites = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the favourite screen</Text>
      <FreelancerCardItem 
      name={"Aliyu Bello"}
      phone={"08065899144"} 
      location={"Lagos,Ng"}
      charge="1000/hr"
      navigation={navigation}
      />
      <FreelancerCardItem 
      name={"Aliyu Bello"}
      phone={"08065899144"} 
      location={"Lagos,Ng"}
      charge="1000/hr"
      navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default Favourites;
