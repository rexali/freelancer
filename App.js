import React from 'react';
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
import Vendor from './components/screens/Vendor';
import Admin from './components/screens/Admin';

const LOCAL_SYSTEM_IP_ADDRESS = '192.168.43.252';
const PORT = '4000';
const link = new HttpLink({ uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/graphql` });
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // link,
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
  // headers: {  
  //   authorization: localStorage.getItem('token') || '',
  //   'client-name': 'Space Explorer [web]',
  //   'client-version': '1.0.0',
  // },
});

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

