import React from "react";
import { 
  View, 
  Text, 
  Pressable, 
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

const Messages = (props) => {
  return (
    <View style={styles.center}>
      <Text>This is the message screen</Text>
      <View style={styles.jumbotron}>
      <TouchableHighlight
          onPress={() => props.navigation.navigate("Chats",{})}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
        <View style={styles.review}>
          <Image  source={require("../../assets/splash.png")} style={styles.avatar} />
          <View>
            <Text>{props.reviewerName}</Text>
             <Text style={styles.reviewContent}>{props.message}</Text>
          </View>
          <Text>{props.reviewerDate}</Text>
        </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

Messages.defaultProps={
  reviewerName:"Aliyu Bello",
  reviewerDate:"Today",
  message:"Good service"
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10
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

export default Messages;
