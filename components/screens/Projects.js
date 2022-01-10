import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import ExpoModal from "../ExpoModal";


const Projects = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text>This is the project screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Projectadd', {})}
        title='Add a project'
        style={styles.button}><Text style={styles.buttonText}>Add+</Text>
      </Pressable>
      <ExpoModal />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  button: {
    marginRight: 5,
    backgroundColor: 'brown',
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 2,
    borderRadius: 10,
    zIndex: 2,
  },
  buttonText: {
    color: 'white',
  },
});

export default Projects;
