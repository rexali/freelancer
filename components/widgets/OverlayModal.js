import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Overlay, Text } from 'react-native-elements';
import Modal from 'modal-react-native-web';

const OverlayModal = ({ overlayBody }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />
      <Overlay
        ModalComponent={Modal}
        ariaHideApp={false}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <Text>{overlayBody} Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};
export default OverlayModal;