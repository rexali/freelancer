import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Forget = () => {
    return (
        <View style={styles.center}>
            <Text>This is the project screen</Text>
            <TextInput
                placeholder="enter email"
                style={styles.input}
                value={""}
                secureTextEntry
            />

            <Button title='Submit' />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        // width: 220
    },
});

export default Forget;
