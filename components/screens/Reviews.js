import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const ratingStars = (num) => {
    let genArray = [...Array(num).keys()];
    let ratings = genArray.map((_, i) => ( 
    <Text key={i}>
        <MaterialIcons name="star" size={20} style={{color: 'yellow' }} />
    </Text>));
    return <View style={{ flexDirection: 'row' }}>{ratings}<Text> ({`${num}/5`})</Text></View>
}

const Reviews = () => {

    return (
        <View style={styles.center}>
            <Text>This is the user review screen</Text>
            <Text style={styles.reviewTitle}>{"Reviews"}</Text>
            <View style={styles.jumbotron}>
                <View style={styles.review}>
                    <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    <View>
                        <Text>Aliyu Bello</Text>
                        {ratingStars(5)}
                    </View>
                    <Text>14/11/2021</Text>
                </View>
                <Text style={styles.reviewContent}>Good work keep it up</Text>
                {/* the button below take you to review screen of Flatlist componet */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        textAlign: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20,
    },
    jumbotron: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    review: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    reviewTitle: {
        fontWeight: "bold",
        margin: 5
    },
    reviewContent: {
        margin: 5
    },
    reviewButton: {
        marginBottom: 5,
        backgroundColor: 'brown',
        color: "white",
        margin: 10,
    },
    reviewButtonText: {
        color: "white",
        textAlign: 'center',
        padding: 10,
    },
});

export default Reviews;
