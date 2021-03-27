import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Cart(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Gio hang</Text>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 40,
  },
});
