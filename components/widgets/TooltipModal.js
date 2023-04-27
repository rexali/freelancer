import React, { useEffect, useState } from 'react';
import { Tooltip, Text, } from 'react-native-elements';
import Modal from 'modal-react-native-web';

const TooltipModal = ({ toolTipBody }) => {
  useEffect(() => { Modal.setAppElement('body'); }, [])
  return (
    <Tooltip
      ModalComponent={Modal}
      popover={<Text>{toolTipBody} I am working</Text>}>
      <Text>Press me</Text>
    </Tooltip>
  );
};
export default TooltipModal;