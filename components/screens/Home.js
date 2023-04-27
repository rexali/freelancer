import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  SectionList,
  Pressable,
  Platform,
  ActivityIndicator,
  TextInput,
} from "react-native";
import '@expo/match-media'
import { useMediaQuery, } from "react-responsive";
import {
  useQuery,
  gql
} from "@apollo/client";

import ServiceCardItem from "../widgets/ServiceCardItem";
import FreelancerCardDetail from '../widgets/FreelancerCardDetail';
import FreelancerCardList from '../widgets/FreelancerCardList'
import Coding from "../coding";
import colors from "../../utils/colors";

const GET_SERVICES = gql`
query GetServiceSection{
  getServiceSection {
    title
    data {
      id
      title
      category
      subcategory
      picture
      description
      charge
      delivery_period
      search_tag
      hourly_rate
      addons {
        title
        charge
      }
      user{
        firstname
        lastname
        email
        addresses{
          local_govt
          state
        }
      }
    }
  }
}`;


function Home({ navigation }) {

  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 }); // {query: "(max-device-width: 1224px)"}

  const {
    loading,
    error,
    data,
    networkStatus,
    fetchMore
  } = useQuery(GET_SERVICES, { errorPolicy: 'all' });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
    header: {
      fontSize: 14,
      backgroundColor: "#ffffff",
      marginHorizontal: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 24
    },
    row: {
      margin: 10,
      flexDirection: isMobile ? 'column' : 'row',
    },
    rowItem: {
      flex: 1,
      marginBottom: 10,
    },
    viewmore: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 5,
      padding: 10,
      fontSize: 14,
      borderRadius: 10
    }
  });

  const renderServiceCardItem = ({ item }) => {

    return (
      <ServiceCardItem
        name={item.title}
        location={item.user.addresses[0]?.state}
        price={item?.charge}
        navigation={navigation}
        id={item.id}
        data={item}
      />
    )
  }

  if (loading) return <View style={styles.container}><Text><ActivityIndicator size="large" /> LOADING... </Text></View>;

  if (error) return <View style={styles.container}><Text>Error : ( {error.extraInfo} )</Text></View>;

  if (Platform.OS === 'web') {

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder=" Search ..."
          style={{ borderWidth: 1, marginTop: 10, borderRadius: 10, height: 35, width: 360, margin: 'auto', opacity: 0.6, }}
          onFocus={() => navigation.navigate("Search")}
        />
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text>Filter by category</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
          </View>

          <View style={styles.rowItem}>
            <Text>Filter by category</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowItem}>

            {/* <Text style={{ backgroundColor: 'blue', borderBottomWidth: 1, marginBottom: 10, width: 180 }}></Text> */}
            <Text>Filter by category</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
          </View>

          <View style={styles.rowItem}>
            <Text>Filter by category</Text>
            {/* <Text style={{ backgroundColor: 'blue', borderBottomWidth: 1, marginBottom: 10, width: 180 }}></Text> */}
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
            <Text>Web designing 👋</Text>
            <Text>Data science 👋</Text>
            <Text>Graphic designing 👋</Text>
            <Text>Web editing and maintenance👋</Text>
            <Text>Artificial Intelligence 👋</Text>
          </View>
        </View>

        <View style={styles.row}>

          {/* <ExchangeRates /> */}
          <FlatList
            extraData={[isMobile]}
            data={data?.getServiceSection}
            renderItem={renderServiceCardItem}
            keyExtractor={(item, index) => item.id + new String(index)}
            initialNumToRender={3}
            horizontal={true}
            ListHeaderComponent={() => (
              <View><Text>Featured offers</Text></View>
            )}
            ListEmptyComponent={() =>
              <View><Text>No featured offers</Text></View>
            }
            ListFooterComponent={() => <View style={{ marginLeft: 20 }}><Button title={`See all`} /></View>}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data.getServiceSection}
        inverted={false}
        extraData={[isMobile]}
        initialNumToRender={1}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => item + index}
        renderItem={renderServiceCardItem}      //{({ item }) => <Item title={item} />}
        renderSectionFooter={({ section: { title } }) => <View style={{ alignItems: 'center' }}><Pressable style={{ backgroundColor: 'brown', maxWidth: 180, borderRadius: 10, }} onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header, styles.viewmore} numberOfLines={1}>View more {title.toLowerCase()}</Text></Pressable></View>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header}>{title}</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header}>view all</Text></Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Home;
