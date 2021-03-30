import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import profileIcon from '../../media/temp/profile.png';

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

  function Logout() {
    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} source={profileIcon} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => {
              navigation.navigate('Authentication');
            }}>
            <Text style={styles.btnText}>Dang nhap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Login() {
    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} source={profileIcon} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.profileName}>Vo Trung Hau</Text>
          <View>
            <TouchableOpacity
              style={styles.btnStyleSigned}
              onPress={() => {
                navigation.navigate('OrderHistory');
              }}>
              <Text style={styles.btnTextSigned}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyleSigned}
              onPress={() => {
                navigation.navigate('ChangeInfo');
              }}>
              <Text style={styles.btnTextSigned}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyleSigned}
              onPress={() => {
                navigation.navigate('OrderHistory');
              }}>
              <Text style={styles.btnTextSigned}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: '#34b089'}}>
      {isLogin ? <Login /> : <Logout />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b089',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  profileName: {
    color: 'white',
    fontSize: 20,
    marginBottom: 50,
  },
  btnStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 70,
    paddingVertical: 15,
    marginBottom: 15,
  },

  btnStyleSigned: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    paddingLeft: 20,
    width: 250,
    height: 50,
  },
  btnText: {
    color: 'grey',
  },
  btnTextSigned: {
    color: 'grey',
  },
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

{
  /* <DrawerContentScrollView {...props}>
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
      </DrawerContentScrollView> */
}
