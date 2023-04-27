import React, { useState } from "react";
import { Video } from 'expo-av';
import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import * as Modal from 'expo-modal';

const { height, width } = Dimensions.get('window');

export default class ExpoModal extends React.Component {

    render() {
        // innerComponent is the one that'll be displayed within the modal, 
        // you have full control of its styling.
        const innerComponent = (
            <View style={{ height: height / 2, width: width, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello world</Text>
                <TouchableOpacity onPress={() => Modal.default.dismissModal()} >
                    <Text>close modal</Text>
                </TouchableOpacity>
            </View>);

        const appContainer = (
            <View style={styles.container}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    shouldPlay={true}
                    resizeMode="cover"
                    style={styles.videoPlayer} />
                <TouchableHighlight onPress={() => { Modal.default.showModal(innerComponent) }}>
                    <Text> Touch Here </Text>
                </TouchableHighlight>
            </View>);

        return Modal.default.wrapIntoModal(appContainer, { backgroundColor: 'blue' });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoPlayer: {
        position: 'relative',
        width: '100%',
        aspectRatio: 3 / 2,
    },
});