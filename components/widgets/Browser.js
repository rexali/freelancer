import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class Browser extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Button
                    title={this.props.title}
                    onPress={()=>this._handleOpenWithWebBrowser(this.props.url)}
                    style={styles.button}
                /> */}
                <Button
                    title={this.props.title}
                    onPress={()=>this._handleOpenWithLinking(this.props.url)}
                    style={styles.button}
                />
            </View>
        );
    }

    _handleOpenWithLinking = (url) => {
        Linking.openURL(url);
    };

    _handleOpenWithWebBrowser = (url) => {
        WebBrowser.openBrowserAsync(url);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    button: {
        marginVertical: 10,
    },
});