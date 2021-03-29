import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function ProductDetail(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('ListProduct')}>
        <Text>Go List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductDetail;
