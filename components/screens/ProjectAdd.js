import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Image,
} from "react-native";
import { Video,AVPlaybackStatus } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';

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

const ProjectAdd = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [budget, setBudget] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    // alert(result.uri);
    if (!result.cancelled) {
      // setImage(result.uri);
      setFile(result.uri)
    }
    console.log(result);
  }

  const _pickImage = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
    // alert(result.uri);
    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (

    <View style={styles.center}>
      <Text>This is the add-project screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Title of the project"
        onChangeText={setTitle}
        value={title}
      />

      <TextInput
        style={styles.input}
        onChangeText={setCategory}
        value={category}
        placeholder="category"
      />

      <TextInput
        style={styles.input}
        onChangeText={setSubcategory}
        value={subcategory}
        placeholder="subcategory"
      />

      <TextInput
        style={styles.input}
        onChangeText={setBudget}
        value={budget}
        placeholder="budget"
        keyboardType='numeric'
      />

      <MultilineTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => setDescription(text)}
        placeholder="Enter description"
        value={description}
      />

      {file&&<View><Video
        ref={video}
        style={styles.video}
        source={{
          uri:file?file:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls={true}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(()=>status)}
      />
        <View style={{ marginBottom: 5 }} >
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>}

      {/* upload file here */}
      <View style={{ marginBottom: 5 }}>
        <Button
          title="Select Document"
          onPress={() => _pickDocument()}
        />
        {/*Added from forum by Aliyu. It would be awesome to get video support 
        added to Expo’s ImagePicker. 
       For the time being, we managed to get by using a combination of 
       DocumentPicker.getDocumentAsync({ type: 'video/*' }) for Android and 
       ImagePickerIOS.openSelectDialog({ showVideos: true }, success, cancel) for iOS */}
        <View style={{ 'marginTop': 20 }}>
          <Button
            title="Select Image"
            onPress={() => _pickImage()}
          />
          {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </View>

      <Button title="Submit" color='brown' />
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

export default ProjectAdd;
