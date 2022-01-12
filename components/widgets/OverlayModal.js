import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Overlay, Text } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const OverlayModal = ({ overlayBody, ...rest }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      {/* <Button title="Open Overlay" onPress={toggleOverlay} /> */}
      <MaterialIcons name="list" onPress={toggleOverlay} size={25} style={{marginRight:10}} />
      <Overlay
        ModalComponent={Modal}
        ariaHideApp={false}
        isVisible={visible}
        overlayStyle={{width:320, position:'absolute', top:0,}}
        onBackdropPress={toggleOverlay}>
        <View>{overlayBody}</View>
      </Overlay>
    </View>
  );
};
export default OverlayModal;