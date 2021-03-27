import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function OrderHistory(props) {
  const {navigation} = props;

  const goBackMain = () => {
    navigation.pop();
  };

  return (
    <View>
      <Text>OrderHistory</Text>
      <TouchableOpacity onPress={goBackMain}>
        <Text>Go back Main</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default OrderHistory;
