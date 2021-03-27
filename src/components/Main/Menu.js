import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

function Menu(props) {
  const {navigation} = props;

  const goBackMain = () => {
    navigation.pop();
  };

  const goAuthentication = () => {
    navigation.push('Authentication');
  };

  const goChangeInfo = () => {
    navigation.push('ChangeInfo');
  };

  const goOrderHistory = () => {
    navigation.push('OrderHistory');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name={'home'} size={20} color={color} />
              )}
              label="Authentication"
              onPress={() => {
                navigation.navigate('Authentication');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name={'home'} size={20} color={color} />
              )}
              label="ChangeInfo"
              onPress={() => {
                navigation.navigate('ChangeInfo');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name={'home'} size={20} color={color} />
              )}
              label="OrderHistory"
              onPress={() => {
                navigation.navigate('OrderHistory');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default Menu;
