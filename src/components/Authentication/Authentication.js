import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';
import {set} from 'react-native-reanimated';

function Authentication(props) {
  const {navigation} = props;
  const [isAccount, setIsAccount] = useState(true);

  const signIn = () => {
    setIsAccount(true);
  };

  const signUp = () => {
    setIsAccount(false);
  };

  const goBackMain = () => {
    navigation.pop();
  };

  function SignInJSX() {
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Nhap dia chi Email..."
        />
        <TextInput style={styles.inputStyle} placeholder="Nhap mat khau..." />
        <TouchableOpacity style={styles.signInNow}>
          <Text style={styles.textSignNow}>Sign In Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function SignUpJSX() {
    return (
      <View>
        <TextInput style={styles.inputStyle} placeholder="Nhap ho va ten" />
        <TextInput style={styles.inputStyle} placeholder="Ten dang nhap..." />
        <TextInput style={styles.inputStyle} placeholder="Mat khau..." />
        <TextInput
          style={styles.inputStyle}
          placeholder="Nhap lai mat khau..."
        />
        <TextInput style={styles.inputStyle} placeholder="Nhap so dien thoai" />
        <TextInput style={styles.inputStyle} placeholder="Nhap dia chi Email" />
        <TextInput style={styles.inputStyle} placeholder="Nhap gioi tinh" />
        <TouchableOpacity style={styles.signInNow}>
          <Text style={styles.textSignNow}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.feature}>
        <TouchableOpacity onPress={() => goBackMain()}>
          <Image style={styles.icon} source={icBack} />
        </TouchableOpacity>
        <Text style={styles.title}>Sign In/ Sign Up</Text>
        <Image style={styles.icon} source={icLogo} />
      </View>
      {isAccount ? <SignInJSX /> : <SignUpJSX />}
      <View style={styles.signInSignUp}>
        <TouchableOpacity style={styles.signIn} onPress={signIn}>
          <Text style={isAccount ? styles.active : styles.notActive}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUp} onPress={signUp}>
          <Text style={!isAccount ? styles.active : styles.notActive}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b089',
    padding: 20,
    justifyContent: 'space-between',
  },
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  icon: {
    height: 30,
    width: 30,
  },
  signInSignUp: {
    flexDirection: 'row',
  },

  active: {
    color: '#34b089',
    fontWeight: 'bold',
  },

  notActive: {
    color: 'grey',
  },

  signIn: {
    flex: 1,
    marginRight: 1.5,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  signUp: {
    flex: 1,
    marginLeft: 1.5,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  signInNow: {
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignNow: {
    color: '#fff',
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 20,
  },
});

export default Authentication;
