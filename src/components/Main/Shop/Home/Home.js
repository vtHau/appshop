import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

function Home(props) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ccc'}}>
      <Collection />
      <Category />
      <TopProduct />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({});
