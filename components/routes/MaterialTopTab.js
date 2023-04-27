import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Notifications from "../screens/Notifications";



const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTab() {
    
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Add" component={VendorAdd} />
      <Tab.Screen name="Feed" component={VendorFeed} />
      <Tab.Screen name="Profile" component={VendorProfile} />
      <Tab.Screen name="Orders" component={VendorTransactions} />
      <Tab.Screen name="Offers" component={VendorOffers} /> */}
      <Tab.Screen name="Notices" component={Notifications} />
    </Tab.Navigator>
  );
}