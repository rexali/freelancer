import React from "react";
import { View, StyleSheet, Text,Pressable } from "react-native";

const Finances = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the finance screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Financeadd', {})}
        title='Add a project'
        style={styles.button}><Text style={styles.buttonText}>Add fund</Text>
      </Pressable>
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

export default Finances;
