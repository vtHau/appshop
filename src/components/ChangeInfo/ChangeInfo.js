import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import backSpecial from '../../media/appIcon/backs.png';
import {actChangeInfo} from './../../actions/actions';

function ChangeInfo(props) {
  const {user} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const {navigation} = props;

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const changeInfo = () => {
    const info = {
      name,
      phone,
      address,
    };
    const change = dispatch(actChangeInfo(info));
    if (change) {
      changeInfoSuccess();
    }
  };

  const changeInfoSuccess = () => {
    Alert.alert(
      'Thong bao',
      'Thanh doi thong tin thanh cong',
      [
        {
          text: 'OK',
          onPress: () => navigation.pop(),
        },
      ],
      {cancelable: false},
    );
  };

  const goBackToMain = () => {
    navigation.pop();
  };

  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    signInContainer,
    signInTextStyle,
    textInput,
  } = styles;

  return (
    <View style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>User Infomation</Text>
        <TouchableOpacity onPress={() => goBackToMain()}>
          <Image source={backSpecial} style={backIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <TextInput
          style={textInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          value={address}
          onChangeText={address => setAddress(address)}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
        <TouchableOpacity style={signInContainer} onPress={changeInfo}>
          <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  header: {
    flex: 1,
    backgroundColor: '#2ABB9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: {fontFamily: 'Avenir', color: '#fff', fontSize: 20},
  backIconStyle: {width: 30, height: 30},
  body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});

export default ChangeInfo;

// goBackToMain() {
//     const { navigation } = this.props;
//     navigation.pop();
// }
