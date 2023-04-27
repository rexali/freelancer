import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
} from "react-native";

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
                maxLength={1000}
                style={{ padding: 10, width: 210 }}
            />
        </View>
    );
}
const OfferQuestion = () => {
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');

    const submit = ()=>{
        let obj = {
            subject: subject,
            comment:comment,
        }
        console.log(obj)
    }


    return (

        <View style={styles.center}>
            <Text>This is the add-project screen</Text>

            <TextInput
                style={styles.input}
                onChangeText={setSubject}
                value={subject}
                placeholder="Enter subject"
                keyboardType='default'
            />

            <MultilineTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => setComment(text)}
                placeholder="Enter comment"
                value={comment}
            />

            <Button title="Send" onPress={()=>submit()} />
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
        width: 220
    },
});

export default OfferQuestion;
