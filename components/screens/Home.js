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
  ActivityIndicator,
  TextInput,
} from "react-native";
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import {
  useQuery,
  gql
} from "@apollo/client";

import FreelancerCardItem from "../widgets/FreelancerCardItem";
import FreelancerCardDetail from '../widgets/FreelancerCardDetail';
import FreelancerCardList from '../widgets/FreelancerCardList'
import Coding from "../coding";
import colors from "../../utils/colors";
const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
  freelancers {
          id
          firstname
          lastname
          occupation
          phone
          state
          country
        }
}
`;

function ExchangeRates() {

  const { loading, error, data, networkStatus, fetchMore } = useQuery(EXCHANGE_RATES, { errorPolicy: 'all' });

  if (loading) return <View><ActivityIndicator size="large" /></View>  //<View ><Text>Loading...</Text></View>;

  if (error) return <View><Text>Error :(</Text></View>;

  return data.rates.map(({ currency, rate }) => (
    <View key={currency}>
      <Text>
        {currency}: {rate}
      </Text>
    </View>
  ));
}

// for section list rendering
const productByCategory = (products) => {
  // let products=[{product_id:1,product_category:"monitor",product_name:"electronic"}]
  let sectiondata = [];
  let category = Array.from(new Set(products.map((item) => item.occupation)));
  category.forEach((item) => {
    sectiondata.push({
      title: item,
      data: [...products.filter(product => product.occupation === item)].slice(0, 2)
    }
    );
  });

  return sectiondata;
}


function Home({ navigation }) {
  // const isMounted = React.useRef(true);
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     // fetch data
  //     return () => {
  //       isMounted.current = false;
  //     };
  //   }
  // });

  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 }); // {query: "(max-device-width: 1224px)"}
  const { loading, error, data, networkStatus, fetchMore } = useQuery(EXCHANGE_RATES);

  const renderItem = ({ item: { firstname, lastname, state, charge, phone, country, id } }) => {
    return (
      <FreelancerCardItem
        name={firstname + ', ' + lastname}
        location={state + ', ' + country}
        price={charge}
        navigation={navigation}
        id={id}
        phone={phone}
        data={data}
      />
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: StatusBar.currentHeight || 0,
    },

    header: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      marginHorizontal: 10
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
      textAlign: 'container',
      color: 'white',
      marginBottom: 5,
      padding: 10,
      fontSize: 14,
      borderRadius: 10
    }
  });

  if (loading) return <View style={styles.container}><ActivityIndicator size="large" /></View>

  if (error) return <View style={styles.container}><Text>Error : ( {error.message} )</Text></View>;

  return (
    <SafeAreaView style={styles.container}>
      {/* mobile view */}

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
        <FlatList
          extraData={[isMobile]}
          data={data?.freelancers.slice(0, 3)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
  )
}

// return (
//   <SafeAreaView>
//     {/* desktop view */}
//     <TextInput
//       placeholder=" Search ..."
//       style={{ borderWidth: 1, marginTop:10, borderRadius: 10, height: 35, width: 360, margin: 'auto', opacity: 0.6, }}
//       onFocus={() => navigation.navigate("Search")} 
//       />

//     <View style={{ flexDirection: 'row' }}>

//        <View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'container', marginLeft: 10 }}>
//        {/* <FlatList
//           extraData={[isMobile]}
//           data={data?.freelancers.slice(0, 3)}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           initialNumToRender={3}
//           horizontal={true}
//           ListHeaderComponent={() => (
//             <View><Text>Featured offers</Text></View>
//           )}
//           ListEmptyComponent={() =>
//             <View><Text>No featured offers</Text></View>
//           }
//           ListFooterComponent={() => <View style={{ marginLeft: 20 }}><Button title={`See all`} /></View>}
//           showsHorizontalScrollIndicator={false}
//         />

//         <FlatList
//           extraData={[isMobile]}
//           data={data?.freelancers.slice(0, 3)}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           initialNumToRender={1}
//           horizontal={true}
//           ListHeaderComponent={() =>
//             <View><Text>Popular categories</Text></View>
//           }
//           ListEmptyComponent={() =>
//             <View><Text>No featured popular categories yet</Text></View>
//           }
//           ListFooterComponent={() => <View><Button title={`See all`} /></View>}
//           showsHorizontalScrollIndicator={false}
//         />

//         <FlatList
//           extraData={[isMobile]}
//           data={data?.freelancers.slice(0, 3)}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           initialNumToRender={1}
//           horizontal={true}
//           ListHeaderComponent={() =>
//             <View><Text>Popular freelancers</Text></View>
//           }
//           ListEmptyComponent={() =>
//             <View><Text>No featured popular freelancer yet</Text></View>
//           }
//           ListFooterComponent={() => <View><Button title={`See all`} /></View>}
//           showsHorizontalScrollIndicator={false}
//         />

{/* <SectionList
          sections={productByCategory(data?.freelancers)}
          inverted={false}
          extraData={[isMobile]}
          initialNumToRender={1}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}      //{({ item }) => <Item title={item} />}
          renderSectionFooter={({ section: { title } }) => <View style={{ alignItems: 'container' }}><Pressable style={{ backgroundColor: 'brown', maxWidth: 180, borderRadius: 10, }} onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header, styles.viewmore} numberOfLines={1}>View more {title.toLowerCase()}</Text></Pressable></View>}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header}>{title}</Text></Pressable>
              <Pressable onPress={() => navigation.navigate("Offers", { title: title })}><Text style={styles.header}>View All</Text></Pressable>
            </View>
          )}
        /> */}
{/* <ExchangeRates /> */ }

//         <FlatList
//           extraData={[isMobile]}
//           data={[]}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           initialNumToRender={1}
//           horizontal={true}
//           ListHeaderComponent={() =>
//             <View><Text>Recommendations</Text></View>
//           }
//           ListEmptyComponent={() =>
//             <View style={{ margin: 30 }}><Text>No recommendations yet</Text></View>
//           }
//           ListFooterComponent={() => false && <View><Button title={`See all`} /></View>}
//           showsHorizontalScrollIndicator={false}
//         />

//         <FlatList
//           extraData={[isMobile]}
//           data={[]}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           initialNumToRender={1}
//           horizontal={true}
//           ListHeaderComponent={() =>
//             <View><Text>Recently views</Text></View>
//           }
//           ListEmptyComponent={() =>
//             <View style={{ margin: 50 }}><Text>No recently view item yet</Text></View>
//           }
//           ListFooterComponent={() => false && <View><Button title={`See all`} /></View>}
//           showsHorizontalScrollIndicator={false}
//         /> */}

//       </View>
//     </View>
//   </SafeAreaView>
// );



export default Home;
