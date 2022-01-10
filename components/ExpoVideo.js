import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  handleVideoRef = component => {
    const playbackObject = component;
    playbackObject.loadAsync(file, initialStatus = {}, downloadFirst = true)
  }
  return (

    <View style={styles.container}>
      <Video
        ref={_handleVideoRef}   //{video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({ ... }); 