import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function SearchView(props) {
  const {navigation} = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Search</Text>
      <TouchableOpacity onPress={() => navigation.push('ProductDetail')}>
        <Text>Go Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchView;

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
