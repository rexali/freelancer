import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function DropdownPicker(props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null); //useState([]) for multiple item
    const [items, setItems] = useState([
        { label: 'Post offer', value: 'Profile' },
        { label: 'Dashboard', value: 'banana' },
        { label: 'Profile', value: 'orange' },
        { label: 'Buyer activity', value: 'pepper' },
        { label: 'Payment', value: 'gari' },
        { label: 'Setting', value: 'setting' },
        { label: 'Logout', value: 'log out' },
        { label: 'Invite & earn', value: 'earn' },
        { label: 'View leaderboard', value: 'view' },
    ]);

    const Item = ({ item }) => {
        return (<View style={{margin:10}}><Text onPress={() => window.sessionStorage.getItem('userToken')!==null? props.navigate(item.value):props.navigate('Signin',{page:item.value})}>{item.label}</Text></View>)
    }

    return (
        <DropDownPicker
            // multiple={true}
            // min={0}
            // max={5}
            // arrowIconStyle={{ width: 10, margin: 'auto' }}
            ArrowUpIconComponent={() => <Image source={require("../../assets/splash.png")} style={{resizeMode:'contain', width:10, height:10,}}/>}
            // ArrowDownIconComponent={() => <Image source={require("../../assets/splash.png")} width={20} height={20} />}
            renderListItem={(props) => <Item {...props} />}
            // ListEmptyComponent={({
            //     listMessageContainerStyle, 
            //     listMessageTextStyle, 
            //     ActivityIndicatorComponent, 
            //     loading, 
            //     message
            //   }) => (
            //     <View style={listMessageContainerStyle}>
            //       {loading ? (
            //         <ActivityIndicatorComponent />
            //       ) : (
            //         <Text style={listMessageTextStyle}>
            //           {message}
            //         </Text>
            //       )}
            //     </View>
            //   )}
            showArrowIcon={false}
            placeholderStyle={{margin:'auto',padding:2, fontWeight:'bold', borderRadius:5, borderWidth:1, borderColor:'green'}}
            placeholder={<MaterialIcons name="menu" size={20} />}
            dropDownDirection='BOTTOM'
            open={open}
            // value={value}
            items={items}
            setOpen={setOpen}
            // setValue={setValue}
            setItems={setItems}
            style={{ width: 100,}}
            containerStyle={{width:200,}}
            listMode={'SCROLLVIEW'}
        />
    );
}