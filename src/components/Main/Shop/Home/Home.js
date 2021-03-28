import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Collection from './Collection';
import Category from './Category';

function Home(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#ccc'}}>
      <Collection />
      <Category />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
