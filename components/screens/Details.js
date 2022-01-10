import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView
} from "react-native";
import {
  useQuery,
  gql
} from "@apollo/client";
import FreelancerCardDetail from '../widgets/FreelancerCardDetail';

const Details = ({ navigation, route }) => {
  const { name, id, data } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Text>This is the detail screen</Text>
        <Text>id: {id}</Text>
        <Text>name: {name}</Text>
        <Text>Last name: {data?.freelancers[0]?.lastname}</Text>
      </View>
      <FreelancerCardDetail />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Details;
