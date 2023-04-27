 import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
 
import Modal from 'modal-react-native-web';
 
export default class ModalReal extends Component {
  state = {
    modalVisible: false,
  };
 
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 
  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          ariaHideApp={false}
          visible={this.state.modalVisible}
          onDismiss={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
 
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
 
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}