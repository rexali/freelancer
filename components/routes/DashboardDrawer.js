import * as React from 'react';
import {
  Text,
  useWindowDimensions,
  TouchableHighlight,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AuthContext } from './NativeStackNavigator';


import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialTopTab from "./MaterialTopTab";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItemList {...props} />

      {/* <DrawerItem
        label="KULWEK"
        onPress={() => props.navigation.closeDrawer()}
      /> */}

      <DrawerItem
        label="Profile"
        onPress={() => {
          props.navigation.navigate("Profile");
          props.navigation.closeDrawer()
        }}
      />
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

const DashboardDrawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = React.useContext(AuthContext);
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const isLoggedIn = true;

  return (
    <DashboardDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'left',
      }} >
      <DashboardDrawer.Screen
        name="KULWEK"
        component={MaterialTopTab}
        options={({ navigation }) => ({
          // drawerPosition: 'left',
          title:'',
          drawerType: isLargeScreen ? 'permanent' : 'front',
          headerShown: true,
          headerTitleAlign: isLargeScreen ? 'left' : 'center',
          drawerLabel: () => <Text>KULWEK</Text>,
          drawerIcon: () => null,
          headerLeft:()=> !isLargeScreen && <MaterialIcons name="menu" size={25} onPress={()=>navigation.toggleDrawer()} />,
          headerRight: () => (
            <TouchableHighlight
              style={{ margin: 5 }}
              activeOpacity={0.9}
              underlayColor="#DDDDDD"
              onPress={() => { signOut(); navigation.navigate("Home", {}) }}
            >
              <Text>{isLargeScreen ? "Logout" : <MaterialIcons name="logout" size={20} />}</Text>
            </TouchableHighlight>)
        })} />
      {/* Another screen here */}
    </DashboardDrawer.Navigator>
  );
}
