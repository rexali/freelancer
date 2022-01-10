import * as React from 'react';
import { View, Text, Button, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StackNavigator, { ContactStackNavigator } from "./StackNavigator";
import MaterialBottomTab from "./MaterialBottomTab";
import MaterialTopTab from "./MaterialTopTab";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Projects from "../screens/Projects";
import Notifications from "../screens/Notifications";
import Feed from "../screens/Feed";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      
      <DrawerItemList {...props} />

      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Favourites"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Workstreams"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Search"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Payment"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Invite and earn"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Logout"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Post project"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Post offer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Freelancer Activity"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

import { getHeaderTitle } from '@react-navigation/elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

function MyHeader({ title, ...props }) {
  return <View style={{ flexDirection: 'row' }}><Text>{title}</Text><Text>Setting</Text></View>
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  const isLoggedIn = true;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        // drawerStyle: {
        //   backgroundColor: 'red',
        //   width: 240,
        // },
        // header: ({ navigation, route, options }) => {
        //   const title = getHeaderTitle(options, route.name);
        //   return <MyHeader title={title} style={options.headerStyle} />;
        // },
        headerShown:false,
        drawerPosition:'left',
      }} >
      <Drawer.Screen
        name="Kulwek"
        component={Home}
        options={({navigation:{navigate}})=>({
          // drawerPosition: 'left',
          drawerType: isLargeScreen? 'permanent':'front',
          headerShown:false,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableHighlight
              style={{ margin: 5 }}
              activeOpacity={0.9}
              underlayColor="#DDDDDD"
              onPress={() => isLoggedIn ? navigate('Account') : navigate('Signin', { page: 'Account' })}
            >
              <MaterialIcons name="person-outline" size={20} />
            </TouchableHighlight>)
        })} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Notification" component={Notifications} />
      <Drawer.Screen name="Projects" component={Projects} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}
