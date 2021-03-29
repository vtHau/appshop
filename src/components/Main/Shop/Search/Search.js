import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchView from './SearchView';
import ProductDetail from './../ProductDetail/ProductDetail';

const Stack = createStackNavigator();

function Search(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchView">
      <Stack.Screen name="SearchView" component={SearchView} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default Search;

const styles = StyleSheet.create({});
