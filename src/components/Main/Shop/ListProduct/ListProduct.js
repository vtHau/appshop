import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function ListProduct(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('ProductDetail')}>
        <Text>Go Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListProduct;
