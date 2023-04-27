import * as React from 'react';

import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    TouchableHighlight,
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DrawerActions } from '@react-navigation/native';
import { AuthContext } from './NativeStackNavigator';

import Home from "../screens/Home";


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <DrawerItemList {...props} />

            <DrawerItem
                label="Sign up"
                onPress={() => {
                    props.navigation.navigate("Signup")
                    props.navigation.closeDrawer();
                }}
            />
            <DrawerItem
                label="Sign out"
                onPress={() => {
                    React.useContext(AuthContext).signOut();
                    props.navigation.closeDrawer();
                }}
            />
            <DrawerItem
                label="Sign in"
                onPress={() => {
                    props.navigation.navigate("Signin", { page: "Dashboard" })
                    props.navigation.closeDrawer()
                }}
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
                label="Payment"
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
                label="Settings"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Invite and earn"
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

const HomeDrawer = createDrawerNavigator();

export default function DrawerNavigator() {

    const { signOut } = React.useContext(AuthContext);

    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const isLoggedIn = true;

    return (
        <HomeDrawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: !isLargeScreen ? 'right' : '',
            }} >
            <HomeDrawer.Screen
                name="KULWEK"
                component={Home}
                options={({ navigation }) => ({
                    // drawerPosition: 'left',
                    drawerType: 'front',
                    headerShown: true,
                    headerTitleAlign: 'left',
                    headerLeft: () => false,
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {

                                isLargeScreen &&
                                (<>
                                    <TouchableHighlight
                                        activeOpacity={0.9}
                                        underlayColor="#DDDDDD"
                                        onPress={() => { navigation.navigate('Signin', { page: 'Dashboard' }) }}
                                        title='info'
                                        style={style.buttonDesktop}>
                                        <Text>Sign in</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        activeOpacity={0.9}
                                        underlayColor="#DDDDDD"
                                        onPress={() => {
                                            signOut();
                                            navigation.navigate('Home', {})
                                            // Toast.show('Sign ou successful.', {
                                            //     duration: Toast.durations.SHORT,
                                            // }); 
                                        }}
                                        style={style.buttonDesktop}>
                                        <Text>Sign out</Text>
                                    </TouchableHighlight>
                                </>)

                            }

                            {
                                !isLargeScreen &&
                                <TouchableHighlight
                                    style={{ margin: 5 }}
                                    activeOpacity={0.9}
                                    underlayColor="#DDDDDD"
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                >
                                    <MaterialIcons name="menu" size={20} />
                                </TouchableHighlight>

                            }
                        </View>
                    )
                })} />
            {/* Another screen here */}
        </HomeDrawer.Navigator>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginRight: 5,
        backgroundColor: 'white',
        padding: 5
    },
    buttonDesktop: {
        marginRight: 5,
        padding: 2
    },
    overlayButton: {
        margin: 5,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10
    }
})
