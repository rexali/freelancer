import React, {
    useEffect,
    useState,
    createContext,
    useReducer,
    useMemo,
} from 'react';

import {
    Pressable,
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    Platform,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Link, useLinkTo} from '@react-navigation/native';
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import Details from "../screens/Details";
import Favorites from '../screens/Favourites';
import BottomTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import FreelancerProfile from '../screens/FreelancerProfile';
import Search from '../screens/Search';
import Finances from '../screens/Finances';
import Projects from '../screens/Projects';
import Chats from '../screens/Chats';
import Offers from '../screens/Offers';
import Settings from '../screens/Settings';
import ProjectAdd from '../screens/ProjectAdd';
import FinanceAdd from '../screens/FinanceAdd';

import DashboardDrawer from './DashboardDrawer';
import HomeDrawer from './HomeDrawer';
import OfferDetail from '../screens/OfferDetail';
import OfferQuestion from '../screens/OfferQuestion';
import OfferRequest from '../screens/OfferRequest';
import Reviews from '../screens/Reviews';
import Notifications from '../screens/Notifications';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';
import Helps from '../screens/Helps';
import Account from '../screens/Account';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Menu from '../screens/Menu';
import MoreMenu from "../widgets/MoreMenu";
// import Toast from 'react-native-root-toast';
import 'react-native-gesture-handler';

const NativeStack = createNativeStackNavigator();

function reducer(prevState, action) {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
        case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
            };
    }
}


const init = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};

function LogoTitle() {
    return (
        <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/favicon.png")}
        />);
}

export const AuthContext = createContext();

export default function NativeSatckNavigator() {

    const isMobile = useMediaQuery({
        maxDeviceWidth: 1023,// alternatively..// query: "(max-device-width: 1224px)"
    });

    const [state, dispatch] = useReducer(reducer, init);

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // let navigation = useNavigation();

    const authContext = useMemo(
        () => ({

            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                if (Platform.OS === 'web') {
                    window.sessionStorage.setItem('userToken', data.email)
                    if (data.email) {
                        dispatch({ type: 'SIGN_IN', token: data.email });
                    }
                } else {
                    await AsyncStorage.setItem('userToken', data.email);
                    if (data.email) {
                        dispatch({ type: 'SIGN_IN', token: data.email });
                    }

                }
                console.log(data.email)
                // In the example, we'll use a dummy token
            },

            signOut: async () => {
                if (Platform.OS === 'web') {
                    window.sessionStorage.clear();

                    dispatch({ type: 'SIGN_OUT' })
                } else {
                    await AsyncStorage.clear((e) => {
                        console.log(e)
                    });

                    dispatch({ type: 'SIGN_OUT' })
                }
            },

            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }), []);


    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;
            try {
                if (Platform.OS === 'web') {
                    userToken = window.sessionStorage.getItem('userToken');
                } else {
                    userToken = await AsyncStorage.getItem("userToken");
                }
                console.log(JSON.parse(userToken))
            } catch (e) {
                // Restoring token failed
                console.log(e)
            }
            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: JSON.parse(userToken) });
        };

        bootstrapAsync();
    }, [])



    return (
        <AuthContext.Provider value={authContext}>
            <NativeStack.Navigator>
                {
                    Platform.OS === 'web' ? (
                        <NativeStack.Group>
                            <NativeStack.Screen
                                name='Home'
                                component={HomeDrawer}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            {/* Mount these components below when it is desktop */}
                            <NativeStack.Screen name="Signin" component={SignIn} />
                            <NativeStack.Screen name="Signup" component={SignUp} />
                        </NativeStack.Group>
                    ) : (
                        // check if user token or user id is defined
                        state.userToken !== null ? (
                            // Screens for logged-in users
                            <NativeStack.Group>
                                <NativeStack.Screen
                                    name="Root"
                                    component={BottomTabNavigator}
                                    options={({ navigation, route }) => ({
                                        title: '',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: "#ffffff" //'#f4511e',
                                        },
                                        headerTintColor: '#00000',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                        },

                                        headerLeft: () => (
                                            <TextInput
                                                placeholder=" Search ..."
                                                style={{ borderWidth: 0.5, borderRadius: 10, height: 35, width: 170, margin: 5, opacity: 0.6, }}
                                                // value={text}
                                                onFocus={() => navigation.navigate("Search")} />
                                        ),
                                        headerRight: () => (
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                                <Pressable
                                                    onPress={() => isLoggedIn ? navigation.navigate('Notifications') : navigation.navigate('signin')}
                                                    title='info'
                                                    style={style.button}><Text><MaterialIcons name="notifications-none" size={20} /></Text></Pressable>
                                                
                                                <Pressable
                                                    onPress={() => navigation.navigate('Account')}
                                                    title='info'
                                                    style={style.button}><Text><MaterialIcons name="person-outline" size={20} /></Text></Pressable>
                                                
                                                {(()=>{
                                                    return<MoreMenu navigation={navigation}/>;
                                                })()}
                                                {/* <Pressable
                                                    onPress={() => navigation.navigate('Menu')}
                                                    title='Log out'
                                                    style={style.button}><Text><MaterialIcons name="menu" size={20} /></Text></Pressable> */}

                                            </View>
                                        ),
                                    }

                                    )}
                                />
                            </NativeStack.Group>
                        ) : (
                            // Authentication screens
                            <NativeStack.Group screenOptions={{ headerShown: false }}>
                                <NativeStack.Screen name="Signin" component={SignIn} />
                                <NativeStack.Screen name="Signup" component={SignUp} />
                            </NativeStack.Group>
                        )
                    )
                }

                {/* Common modal screens */}
                <NativeStack.Group screenOptions={{ presentation: 'modal' }}>
                    <NativeStack.Screen name="Helps" component={Helps} />
                    <NativeStack.Screen name="Settings" component={Settings} />
                </NativeStack.Group>

                <NativeStack.Group screenOptions={{ headerShown: true }}>
                    <NativeStack.Screen
                        name="Details"
                        component={Details}
                        // options={({ route }) => ({ title: route.params.name  })}
                        options={({ route, navigation }) => ({
                            headerTitle: (props) => <LogoTitle {...props} />,
                            headerRight: () => !isMobile ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Pressable
                                        onPress={() => alert(route.name)}
                                        title='info'
                                        style={style.button}><Text>Invite</Text></Pressable>

                                    <Pressable
                                        onPress={() => alert('This is a button!')}
                                        title='info'
                                        style={style.button}><Text>About</Text></Pressable>

                                    <Pressable
                                        onPress={() => alert('This is a button!')}
                                        title='info'
                                        style={style.button}><Text>Help</Text></Pressable>
                                </View>
                            ) : <Pressable
                                onPress={() => alert('This is a button!')}
                                title='info'
                                style={style.button}><Text>Help</Text></Pressable>
                        })}
                    />
                    <NativeStack.Screen
                        name='Profile'
                        component={Profile}
                        options={({ navigation }) => ({
                            title: 'Profile',
                            headerRight: () => (
                                <Pressable
                                    onPress={() => navigation.navigate('Settings', {})}
                                    title='info'
                                    style={style.button}><Text><MaterialIcons name="settings" color="gray" size={20} /></Text></Pressable>
                            )
                        })}
                    />
                    <NativeStack.Screen name='Notifications' component={Notifications} />
                    <NativeStack.Screen name='Account' component={Account} />
                    <NativeStack.Screen name='Offers' component={Offers} />
                    <NativeStack.Screen name='Offerdetail' component={OfferDetail} options={{ title: 'Detail' }} />
                    <NativeStack.Screen name='Offerquestion' component={OfferQuestion} options={{ title: 'Ask Question' }} />
                    <NativeStack.Screen name='Offerrequest' component={OfferRequest} options={{ title: 'Make Request' }} />
                    <NativeStack.Screen name='Reviews' component={Reviews} options={{ title: 'List of Review' }} />
                    <NativeStack.Screen
                        name='Search'
                        component={Search}
                        options={({ navigation }) => ({
                            headerTitleAlign: 'center',
                            headerLeft: () => false
                        })} />
                    <NativeStack.Screen name='Finances' component={Finances} />
                    <NativeStack.Screen name='Financeadd' component={FinanceAdd} options={{ title: 'Add fund' }} />
                    <NativeStack.Screen
                        name='Projects'
                        component={Projects}
                        options={() => ({
                            headerRight: () => (<Pressable
                                onPress={() => alert('This is a button!')}
                                title='info'
                                style={style.button}><Text>Add</Text></Pressable>)
                        })}
                    />
                    <NativeStack.Screen name='Projectadd' component={ProjectAdd} options={{ title: 'Add a project' }} />
                    <NativeStack.Screen name='Freelancer' component={FreelancerProfile} />
                    <NativeStack.Screen name='Favourite' component={Favorites} />
                    <NativeStack.Screen name='Chats' component={Chats} />
                    <NativeStack.Screen name='Contact' component={Contact} />
                    <NativeStack.Screen name='About' component={About} />
                    <NativeStack.Screen name='Menu' component={Menu} />
                    <NativeStack.Screen
                        name='Dashboard'
                        component={DashboardDrawer}
                        options={{
                            header: () => false,
                        }}
                    />
                    {/* <NativeStack.Screen name="Home">
                       {props => <Home {...props} extraData={someData} />}
                     </NativeStack.Screen> */}
                </NativeStack.Group>

            </NativeStack.Navigator>
        </AuthContext.Provider>
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
