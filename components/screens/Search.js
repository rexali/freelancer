import React from "react";
import { 
  View, 
  StyleSheet, 
  Text,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={""}
      /><Text style={{ alignSelf: 'center' }}><MaterialIcons name="search" size={20} /></Text>
      </View>
      <Text>This is the search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputWrapper:{
    flexDirection:'row'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // width: 220
},
});

export default Search;
