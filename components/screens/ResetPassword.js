import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
} from "react-native";


const ResetPassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="new password"
                    style={styles.input}
                    value={""}
                    secureTextEntry
                />
                <TextInput
                    placeholder="new password"
                    style={styles.input}
                    value={""}
                    secureTextEntry
                />

                <Button title='Submit' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    inputWrapper: {
        flexDirection: 'column'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        // width: 220
    },
});

export default ResetPassword;
