import React from "react";
import { Alert, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ContextMenu(props){

    let _menu = null;

    return (
        <View style={props.menustyle}>
            <Menu
                ref={(ref) => (_menu = ref)}
                button={
                    props.isIcon ? (
                        <TouchableOpacity onPress={() => _menu.show()}>
                            <Image
                                source={{
                                    uri:
                                        'https://reactnativecode.com/wp-content/uploads/2020/12/menu_icon.png',
                                }}
                                style={{ width: 30, height: 30 }}
                            />
                            {/* <MaterialIcons name="more_vert" size={20} /> */}
                            {/* <FontAwesome name='ellipsis-v' size={20} /> */}
                        </TouchableOpacity>
                    ) : (
                        <Text
                            onPress={() => _menu.show()}
                            style={props.textStyle}>
                            {props.menutext}
                        </Text>
                    )
                }>
                <MenuItem onPress={() => { Alert.alert('Share Clicked...') }}>
                    Share
                </MenuItem>

                <MenuItem onPress={() => { Alert.alert('Share Clicked...') }}>
                    Settings
                </MenuItem>

                <MenuItem onPress={() => { Alert.alert('Share Clicked...') }}>
                    About
                </MenuItem>

                <MenuItem onPress={() => { Alert.alert('Share Clicked...') }}>
                    Contact
                </MenuItem>

                <MenuItem onPress={() => { Alert.alert('Share Clicked...') }}>
                    Sign out
                </MenuItem>

                <MenuDivider />

                <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}>
                    Menu Item 1
                </MenuItem>

                <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}>
                    Menu Item 2
                </MenuItem>

                <MenuItem disabled>Disabled Menu Item 2</MenuItem>

                <MenuItem onPress={() => { Alert.alert('PopUp Menu Button Clicked...') }}>
                    Menu Item 3
                </MenuItem>

            </Menu>
        </View>
    );
}

export default ContextMenu;

// <ContextMenu
// menutext="Menu"
// menustyle={{ marginRight: 14 }}
// textStyle={{ color: 'white' }}
// navigation={navigation}
// route={route}
// isIcon={true} />