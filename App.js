import React from 'react';
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { RootSiblingParent } from 'react-native-root-siblings';

import NativeStackNavigator from "./components/routes/NativeStackNavigator";

const PORT = '4000';
const LOCAL_SYSTEM_IP_ADDRESS = '192.168.43.252';
const link = new HttpLink({ uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/graphql` });
var client;

if (Platform.OS==='web') {
  client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  // headers: {  
  //   authorization: localStorage.getItem('token') || '',
  // },
});
} else{
client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  // headers: {  
  //   authorization: localStorage.getItem('token') || '',
  // },
});
}


export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* <RootSiblingParent> */}
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="blue" translucent={false} />
          <NativeStackNavigator />
        </NavigationContainer>
      {/* </RootSiblingParent> */}
    </ApolloProvider>
  );
}

