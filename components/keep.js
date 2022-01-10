 // <NativeStack.Navigator initialRouteName="Home">
        //     {isTabletOrMobileDevice ? <NativeStack.Screen
        //         name="Root"
        //         component={BottomTabNavigator}
        //         // options={{ title: 'Overview'}}
        //         options={({ navigation }) => ({
        //             title: '  Woklancer',
        //             headerTitleAlign :'center',
        //             headerStyle: {
        //                 backgroundColor: "#ffffff" //'#f4511e',
        //             },
        //             headerTintColor: '#00000',
        //             headerTitleStyle: {
        //                 fontWeight: 'bold',
        //             },

        //             headerLeft: () => isTabletOrMobileDevice ? (
        //                 <TextInput
        //                     placeholder=" Search ..."
        //                     style={{ borderWidth: 0.5, borderRadius: 10, height: 35, width: 120, margin: 5, opacity: 0.6, }}
        //                     value={text}
        //                     onFocus={() => navigation.navigate("Search")} />
        //             ):'',

        //             headerRight: () => !isTabletOrMobileDevice ? (
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Invite</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>About</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Help</Text></Pressable>

        //                 </View>
        //             ) : (
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //                     <Pressable
        //                         onPress={() => navigation.navigate('Profile')}
        //                         title='info'
        //                         style={style.button}><Text><MaterialIcons name="person-outline" size={20} /></Text></Pressable>
        //                     <Pressable
        //                         onPress={() => navigation.navigate('Notifications')}
        //                         title='info'
        //                         style={style.button}><Text><MaterialIcons name="notifications-none" size={20} /></Text></Pressable>
        //                 </View>
        //             ),
        //         })}
        //     /> : <NativeStack.Screen
        //         name='Home'
        //         component={Home}
        //         options={({navigation}) => ({
        //             title: '',
        //             headerShown: true,
        //             // headerTitle: (props) => <LogoTitle {...props} />,
        //             // headerLeft:(props)=>(<LogoTitle {...props} />),
        //             headerLeft: () => (
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text style={{ fontWeight: 'bold' }}>Wokance</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>About</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Contact</Text></Pressable>
        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Blog</Text></Pressable>
        //                     <TextInput
        //                     placeholder=" Search ..."
        //                     style={{ borderWidth: 0.5, borderRadius: 10, height: 20, width: 200, margin: 5, opacity: 0.2, }}
        //                     value={text}
        //                     onFocus={() => navigation.navigate("Search")} />

        //                 </View>),

        //             headerRight: () => (
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Account</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Wish</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Sign in</Text></Pressable>
        //                 </View>)
        //         })}
        //     />}
        //     <NativeStack.Screen
        //         name="Details"
        //         component={Details}
        //         // options={({ route }) => ({ title: route.params.name  })}
        //         options={({ route, navigation }) => ({
        //             headerTitle: (props) => <LogoTitle {...props} />,
        //             headerRight: () => !isTabletOrMobileDevice ? (
        //                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //                     <Pressable
        //                         onPress={() => alert(route.name)}
        //                         title='info'
        //                         style={style.button}><Text>Invite</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>About</Text></Pressable>

        //                     <Pressable
        //                         onPress={() => alert('This is a button!')}
        //                         title='info'
        //                         style={style.button}><Text>Help</Text></Pressable>
        //                 </View>
        //             ) : <Pressable
        //                 onPress={() => alert('This is a button!')}
        //                 title='info'
        //                 style={style.button}><Text>Help</Text></Pressable>
        //         })}
        //     />
        //     <NativeStack.Screen name='Profile' component={Profile} />
        //     <NativeStack.Screen name='Notifications' component={Notifications} />
        //     <NativeStack.Screen name='Offers' component={Offers} />
        //     <NativeStack.Screen name='Offerdetail' component={OfferDetail} options={{title:'Detail'}} />
        //     <NativeStack.Screen name='Offerquestion' component={OfferQuestion} options={{title:'Ask Question'}} />
        //     <NativeStack.Screen name='Offerrequest' component={OfferRequest} options={{title:'Make Request'}} />
        //     <NativeStack.Screen name='Reviews' component={Reviews} options={{title:'List of Review'}} />
        //     <NativeStack.Screen name='Search' component={Search} options={{headerTitleAlign :'center'}} />
        //     <NativeStack.Screen name='Finances' component={Finances} />
        //     <NativeStack.Screen name='Financeadd' component={FinanceAdd} options={{title:'Add fund'}} />
        //     <NativeStack.Screen
        //         name='Projects'
        //         component={Projects}
        //         options={()=>({
        //             headerRight: () => (<Pressable
        //                 onPress={() => alert('This is a button!')}
        //                 title='info'
        //                 style={style.button}><Text>Add</Text></Pressable>)
        //         })}
        //     />
        //     <NativeStack.Screen name='Projectadd' component={ProjectAdd} options={{title:'Add a project'}} />
        //     <NativeStack.Screen name='Freelancer' component={FreelancerProfile} />
        //     <NativeStack.Screen name='Favourite' component={Favorites} />
        //     <NativeStack.Screen name='Chats' component={Chats} />
        //     <NativeStack.Screen
        //         name='Settings'
        //         component={Settings}
        //         options={{
        //             presentation: 'modal'
        //         }}
        //     />
        //     {/* <NativeStack.Screen name="Home">
        //         {props => <Home {...props} extraData={someData} />}
        //     </NativeStack.Screen> */}
        // </NativeStack.Navigator>