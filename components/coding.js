import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    Switch,
    Image,
    TouchableOpacity,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import DocumentPickers from "./DocumentPicker";
import { DateTimePickers } from "./DateTimePicker";


const MultilineTextInput = (props) => {
    return (
        <View
            style={{
                backgroundColor: props.value,
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderTopColor: "#000000",
                borderTopWidth: 1,
                margin: 10
            }}>
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                maxLength={100}
                style={{ padding: 10, width: 210 }}
            />
        </View>
    );
}

const Coding = () => {
    const [text, onChangeText] = React.useState("Enter name here");
    const [number, onChangeNumber] = React.useState(null);
    const [value, onChangeTextM] = React.useState('Enter key features here');
    const [value1, setValue1] = React.useState('Enter summary here');
    const [value2, setValue2] = React.useState('Enter Description here');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selectedLanguage, setSelectedLanguage] = useState()
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile</Text>

            <DateTimePickers />

            <DocumentPickers />

            <View>
                <Text>Select from below:</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => { setSelectedLanguage(itemValue);alert(itemValue) }}
                >
                    <Picker.Item label="Java" value="Java" />
                    <Picker.Item label="React" value="React" />
                    <Picker.Item label="C++" value="C++" />
                    <Picker.Item label="Javascript" value="Javascript" />
                </Picker>
            </View>

            {selectedImage !== null && (<View style={styles.container}>
                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.thumbnail}
                />
            </View>)}

            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter age here"
                keyboardType="numeric"
            />

            <MultilineTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeTextM(text)}
                value={value}
            />

            <MultilineTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => setValue1(text)}
                value={value1}
            />

            <MultilineTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => setValue2(text)}
                value={value2}
            />

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 220
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});

export default Coding;
