import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Authentication(props) {
  const {navigation} = props;

  const goBackMain = () => {
    navigation.pop();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#b4b4b4'}}>
      <Text>Authentication</Text>
      <TouchableOpacity onPress={goBackMain}>
        <Text>Go back Main</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Authentication;
