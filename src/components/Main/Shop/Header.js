import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const {height} = Dimensions.get('window');

function Header(props) {
  const {navigation} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.feature}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icon} source={icMenu} />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping</Text>
        <Image style={styles.icon} source={icLogo} />
      </View>
      <TextInput style={styles.textInput} placeholder="Nhap de tim kiem..." />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 10,
    padding: 10,
    backgroundColor: '#34b089',
    justifyContent: 'space-around',
  },
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: height / 24,
    backgroundColor: '#fff',
    paddingLeft: 12,
  },
  title: {
    color: 'white',
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default Header;
