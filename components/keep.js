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



        
       //  {isMobile ? (
       //        Platform.OS === 'android' ? (
       //            // check if user token or user id is defined
       //            state.userToken !== null ? (
       //                // Screens for logged-in users
       //                <NativeStack.Group>
       //                    <NativeStack.Screen
       //                        name="Root"
       //                        component={BottomTabNavigator}
       //                        options={({ navigation, route }) => ({
       //                            title: 'Kulwek',
       //                            headerTitleAlign: 'center',
       //                            headerStyle: {
       //                                backgroundColor: "#ffffff" //'#f4511e',
       //                            },
       //                            headerTintColor: '#00000',
       //                            headerTitleStyle: {
       //                                fontWeight: 'bold',
       //                            },

       //                            headerLeft: () => (
       //                                <TextInput
       //                                    placeholder=" Search ..."
       //                                    style={{ borderWidth: 0.5, borderRadius: 10, height: 35, width: 120, margin: 5, opacity: 0.6, }}
       //                                    // value={text}
       //                                    onFocus={() => navigation.navigate("Search")} />
       //                            ),
       //                            headerRight: () => (
       //                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

       //                                    <Pressable
       //                                        onPress={() => isLoggedIn ? navigation.navigate('Notifications') : navigation.navigate('signin')}
       //                                        title='info'
       //                                        style={style.button}><Text><MaterialIcons name="notifications-none" size={20} /></Text></Pressable>
       //                                    <Pressable
       //                                        onPress={() => navigation.navigate('Account')}
       //                                        title='info'
       //                                        style={style.button}><Text><MaterialIcons name="person-outline" size={20} /></Text></Pressable>
       //                                    <Pressable
       //                                        onPress={authContext.signOut}
       //                                        title='Log out'
       //                                        style={style.button}><Text><MaterialIcons name="logout" size={20} /></Text></Pressable>

       //                                    <Pressable
       //                                        onPress={() => navigation.navigate('Menu')}
       //                                        title='Log out'
       //                                        style={style.button}><Text><MaterialIcons name="menu" size={20} /></Text></Pressable>

       //                                </View>
       //                            ),
       //                        }

       //                        )}
       //                    />
       //                </NativeStack.Group>
       //            ) : (
       //                // Authentication screens
       //                <NativeStack.Group screenOptions={{ headerShown: false }}>
       //                    <NativeStack.Screen name="Signin" component={SignIn} />
       //                    <NativeStack.Screen name="Signup" component={SignUp} />
       //                </NativeStack.Group>
       //            )

       //            // home screen for mobile web
       //        ) : (<NativeStack.Screen
       //            // name="Root" component={DrawerNavigator}
       //            name="KULWEK" component={Home}
       //            options={({ navigation: { navigate } }) => ({
       //                headerShown: true,
       //                headerRight: () => (
       //                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

       //                        <TouchableHighlight
       //                            activeOpacity={0.9}
       //                            underlayColor="#DDDDDD"
       //                            onPress={() => state.userToken !== null ? navigate('Notifications') : navigate('Signin', { page: 'Notifications' })}
       //                            title='info'
       //                            style={style.buttonDesktop}><Text><MaterialIcons name="notifications-none" size={20} /></Text></TouchableHighlight>

       //                        <TouchableHighlight
       //                            activeOpacity={0.9}
       //                            underlayColor="#DDDDDD"
       //                            onPress={() => {
       //                                authContext.signOut();
       //                                navigate('Home', {})
       //                                // Toast.show('Sign ou successful.', {
       //                                //     duration: Toast.durations.SHORT,
       //                                // }); 
       //                            }}
       //                            style={style.buttonDesktop}><Text>Sign out</Text></TouchableHighlight>

       //                        <TouchableHighlight
       //                            activeOpacity={0.9}
       //                            underlayColor="#DDDDDD"
       //                            onPress={() => { navigate('Signin', {}) }}
       //                            title='info'
       //                            style={style.buttonDesktop}><Text>Sign in</Text></TouchableHighlight>

       //                    </View>

       //                )
       //            })} />)

       //    ) : (
       //        // Home screen for desktop web
       //        <NativeStack.Group>
       //            <NativeStack.Screen
       //                name='Home'
       //                // component={DrawerNavigator}
       //                component={Home}
       //                options={({ navigation: { navigate } }) => ({
       //                    title: '',
       //                    headerShown: true,
       //                    // headerTitle: (props) => <LogoTitle {...props} />,
       //                    // headerLeft:(props)=>(<LogoTitle {...props} />),
       //                    headerLeft: () => (
       //                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => window.location.reload()}
       //                                style={style.button}><Text style={{ fontWeight: 'bold' }}>KULWEK</Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => navigate('About')}
       //                                style={style.button}><Text>About</Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => navigate('Contact')}
       //                                style={style.button}><Text>Contact</Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                // onPress={() => alert('This is a button!')}
       //                                style={style.button}><Anchor href="https://google.com">Blog</Anchor></TouchableHighlight>
       //                        </View>),

       //                    headerRight: () => (
       //                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => state.userToken !== null ? navigate('Account') : navigate('Signin', { page: 'Account' })}
       //                                style={style.buttonDesktop}><Text><MaterialIcons name="mail-outline" size={20} /></Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => state.userToken !== null ? navigate('Account') : navigate('Signin', { page: 'Account' })}
       //                                style={style.buttonDesktop}><Text>Account</Text></TouchableHighlight>


       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => state.userToken !== null ? navigate('Favourite') : navigate('Signin', { page: 'Favourite' })}
       //                                style={style.buttonDesktop}><Text><MaterialIcons name="favorite-border" size={20} /></Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => state.userToken !== null ? navigate('Notifications') : navigate('Signin', { page: 'Notifications' })}
       //                                title='info'
       //                                style={style.buttonDesktop}><Text><MaterialIcons name="notifications-none" size={20} /></Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => { navigate('Signin', {}) }}
       //                                title='info'
       //                                style={style.buttonDesktop}><Text>Sign in</Text></TouchableHighlight>

       //                            <TouchableHighlight
       //                                activeOpacity={0.9}
       //                                underlayColor="#DDDDDD"
       //                                onPress={() => {
       //                                    authContext.signOut();
       //                                    navigate('Home', {})
       //                                    // Toast.show('Sign ou successful.', {
       //                                    //     duration: Toast.durations.SHORT,
       //                                    // }); 
       //                                }}
       //                                style={style.buttonDesktop}><Text>Sign out</Text></TouchableHighlight>
       //                            {/* <DropdownPicker navigate={navigate} /> */}
       //                        </View>)
       //                })}
       //            />
       //            {/* Mount these components below when it is desktop */}
       //            <NativeStack.Screen name="Signin" component={SignIn} />
       //            <NativeStack.Screen name="Signup" component={SignUp} />
       //        </NativeStack.Group>
       //    )}

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
//           renderItem={renderServiceCardItem}
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
//           renderItem={renderServiceCardItem}
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
//           renderItem={renderServiceCardItem}
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
          renderItem={renderServiceCardItem}      //{({ item }) => <Item title={item} />}
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
//           renderItem={renderServiceCardItem}
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
//           renderItem={renderServiceCardItem}
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


// const client = new ApolloClient({
//   // uri: "http://localhost:4000/graphql",
//   link,
//   // uri: "https://48p1r2roz4.sse.codesandbox.io",
//   cache: new InMemoryCache(),
//   // headers: {  
//   //   authorization: localStorage.getItem('token') || '',
//   //   'client-name': 'Space Explorer [web]',
//   //   'client-version': '1.0.0',
//   // },
// });