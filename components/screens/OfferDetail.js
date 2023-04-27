import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
    Button,
    TouchableHighlight,
    Modal,
    StatusBar,
} from "react-native";
import Checkbox from 'expo-checkbox';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from 'react-native-paper'
import { ratingStars } from "./Reviews";

export default function OfferDetail({ navigation, ...props }) {
    let [visible, setVisible] = useState(false)
    let [request, setRequest] = useState(false)
    let [question, setQuestion] = useState(false)
    const [isChecked, setChecked] = useState(false);

    const
        name = 'Aliyu Bell',
        rating = 5,
        jobKind = "I will create website for you",
        deliveryPeriod = "1 week",
        responseNature = "instantly",
        numSales = "256",
        description = "goood for you",
        reviews = "Gooodproduc",
        price = "N200",
        review_id = 1,
        vendor_id = 1,
        user_id = 1,
        firstOffer = "I will create website for you",
        secondOffer = "server",
        reviewerName = "Bello Daniel",
        reviewerRating = 6,
        reviewerDate = "12 Dec",
        message = "God will help you",
        numReviews = '200'

    const buyService = (vendor_id, user_id) => {

    }

    const viewAllReview = (vendor_id, review_id) => {

    }

    useEffect(() => {

    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ScrollView horizontal={true} style={styles.carousel}>
                    <View>
                        <MaterialIcons name="favorite-border" style={styles.icon} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </View>
                    <View>
                        <MaterialIcons name="favorite-border" style={styles.icon} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </View>
                    <View>
                        <MaterialIcons name="favorite-border" style={styles.icon} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </View>
                    <View>
                        <MaterialIcons name="favorite-border" style={styles.icon} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </View>
                    <View>
                        <MaterialIcons name="favorite-border" style={styles.icon} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </View>
                </ScrollView>

                <TouchableHighlight
                    onPress={() => navigation.navigate("Vendordetail", {})}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD">
                    <View style={styles.vendorContainer}>
                        <Image source={require("../../assets/splash.png")} style={styles.avatarr} />
                        <View>
                            <Text>{name}</Text>
                            {ratingStars(rating)}
                        </View>
                    </View>
                </TouchableHighlight>

                <View style={styles.jumbotron}><Text style={styles.offerText}>{firstOffer}</Text></View>

                <View style={styles.features}>
                    <Text><MaterialIcons name="favorite" style={styles.iconFeature} /> {" "} {responseNature}</Text>
                    <Text><MaterialIcons name="shopping-cart" style={styles.iconFeature} />{"        "}  {numSales}</Text>
                    <Text><MaterialIcons name="star" style={styles.iconFeature} /> {"    "} {deliveryPeriod}</Text>
                </View>

                <View>
                    <Text style={styles.descriptionTitle}>{"Description"}</Text>
                    <View style={styles.description}>
                        <Text>{description}</Text>
                    </View>
                </View>

                <View style={styles.request}>
                    <Text style={styles.requestTite}>{"Start Request"}</Text>
                    {/* Take user to screen to send start request */}
                    <Pressable style={styles.requestButton} onPress={() => navigation.navigate('Offerrequest', {})}><Text style={styles.requestButtonText}>Request to start</Text></Pressable>
                </View>

                <View style={styles.question}>
                    <Text style={styles.questionTitle}>{"Ask Question"}</Text>

                    <Pressable style={styles.questionButton} onPress={() => navigation.navigate('Offerquestion', {})}><Text style={styles.questionButtonText}>Ask Question</Text></Pressable>
                </View>

                <View style={styles.bump}>
                    <Text style={styles.bumpTitle}>{"Add on"}</Text>

                    {/* card of offer */}
                    <View>
                        <Card style={styles.card}>
                            <View style={styles.cardbody}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#4630EB' : undefined} />
                                    <Text style={{ alignSelf: 'center' }}>Tick</Text>
                                </View>
                                <Text>{secondOffer}</Text>
                                <Text>{"+ N100"}</Text>
                            </View>
                        </Card>
                    </View>
                </View>


                <View style={styles.jumbotron}>
                    <Text style={styles.reviewTitle}>{"Reviews"}</Text>
                    <View style={styles.review}>
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                        <View>
                            <Text>{reviewerName}</Text>
                            {ratingStars(reviewerRating)}
                        </View>
                        <Text>{reviewerDate}</Text>
                    </View>
                    <Text style={styles.reviewContent}>{message}</Text>
                    <Pressable style={styles.reviewButton} onPress={() => navigation.navigate('Reviews', {})}><Text style={styles.reviewButtonText}>View All Review</Text></Pressable>
                </View>

                <View>
                    <Text style={styles.relatedTitle}>Related</Text>
                    <ScrollView horizontal={true} style={styles.carousel}>
                        {/* use flat list here or map for 10 ralated items of Card or CardList Component */}
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
                    </ScrollView>
                </View>
            </ScrollView>
            <View>
                <Card style={styles.card}>
                    <View style={styles.pay}>
                        <Text style={{ alignSelf: 'center' }}>{price}</Text>
                        {/* <Pressable onPress={() => buyService(vendor_id, user_id)}>
                            <Text><MaterialIcons name="shopping-cart" />  Buy</Text>
                        </Pressable> */}
                        <Button title="Buy" color="green" />
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    icon: {
        zIndex: 2,
        textAlign: 'right',
        position: 'absolute',
        fontSize: 20
    },
    carousel: {
        margin: 10,
    },
    textRating: {
        color: 'yellow',
        fontSize: 14
    },
    vendorContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    offerText: {
        fontSize: 14,
        textAlign: 'center'
    },
    jumbotron: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    features: {
        alignItems: "center"
    },
    description: {
        margin: 10,
        alignItems: 'center'
    },
    descriptionTitle: {
        fontWeight: "bold",
        margin: 10,
    },
    request: {
        alignItems: 'center',
        margin: 10,
    },
    requestTite: {
        fontWeight: "bold",
    },
    bumpTitle: {
        fontWeight: "bold",
    },
    bump: {
        margin: 10,
    },

    requestButton: {
        padding: 10,
        backgroundColor: 'brown',
    },
    requestButtonText: {
        color: 'white',
    },
    question: {
        alignItems: 'center',
        margin: 10,
    },
    questionTitle: {
        fontWeight: "bold",
    },
    questionButton: {
        padding: 10,
        backgroundColor: 'brown',
    },
    questionButtonText: {
        color: "white"
    },
    cardbody: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
    },
    card: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    cardWrapper: {
        position: 'absolute',
        bottom: 0,
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
    relatedTitle: {
        fontWeight: 'bold',
        margin: 5,
    },
    avatar: {
        width: 80,
        height: 80,
        marginRight: 10,

    },
    avatarr: {
        width: 80,
        height: 80,
        margin: 10
    },
    pay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    button: {
        padding: 10,
        backgroundColor: 'brown',
        textAlign: "center"
    },
    buttonText: {
        color: 'white'
    },
    checkbox: {
        margin: 5,
    },
    iconFeature: {
        marginRight: 90,
    }
})
