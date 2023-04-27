import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
// import { DocumentPicker, ImagePicker } from 'expo';

export default class DocumentPickers extends React.Component {

    state = {
        image: null,
    };
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
        alert(result.uri);
        console.log(result);
    }

    _pickImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
        alert(result.uri);
        console.log(result)

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;
        return (
            <View style={styles.container}>
                <Button
                    title="Select Document"
                    onPress={this._pickDocument}
                />
                {/*Added from forum by Aliyu. It would be awesome to get video support added to Expo’s ImagePicker. 
                 For the time being, we managed to get by using a combination of DocumentPicker.getDocumentAsync({ type: 'video/*' }) for Android and ImagePickerIOS.openSelectDialog({ showVideos: true }, success, cancel) for iOS */}
                <View style={{ 'marginTop': 20 }}>
                    <Button
                        title="Select Image"
                        onPress={this._pickImage}
                    />
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
