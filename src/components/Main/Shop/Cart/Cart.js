import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import CartView from './CartView';
import ProductDetail from './../ProductDetail/ProductDetail';

const Stack = createStackNavigator();

function Cart(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CartView">
      <Stack.Screen name="CartView" component={CartView} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default Cart;

const styles = StyleSheet.create({});
