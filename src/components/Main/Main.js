import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

const Drawer = createDrawerNavigator();

function Main(props) {
  const {navigation} = props;

  const goAuthentication = () => {
    // navigation.navigate('Authentication');
    navigation.push('Authentication');
  };

  const goChangeInfo = () => {
    navigation.push('ChangeInfo');
  };

  const goOrderHistory = () => {
    navigation.push('OrderHistory');
  };

  return (
    <Drawer.Navigator drawerContent={props => <Menu {...props} />}>
      <Drawer.Screen name="Shop" component={Shop} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Main;
