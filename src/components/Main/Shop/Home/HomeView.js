import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

function Home(props) {
  const {navigation, type, topProduct} = props;

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ccc'}}>
      <Collection navigation={navigation} />
      <Category navigation={navigation} type={type} />
      <TopProduct navigation={navigation} topProduct={topProduct} />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({});
