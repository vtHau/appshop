import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import backList from './../../../../media/appIcon/backList.png';
import sp1 from './../../../../media/temp/sp1.jpeg';
import sp2 from './../../../../media/temp/sp2.jpeg';
import sp3 from './../../../../media/temp/sp3.jpeg';
import sp4 from './../../../../media/temp/sp4.jpeg';

function ListProduct(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image style={styles.backStyle} source={backList} />
          </TouchableOpacity>

          <Text style={styles.titleStyle}>Dien thoai</Text>
          <View style={{width: 30}}></View>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <View style={styles.productInfo}>
            <Text style={styles.textName}>Colo Blueeeee</Text>
            <Text style={styles.textPrice}>4124</Text>
            <Text style={styles.textPrice}>4124</Text>
            <View style={styles.lastRowInfo}>
              <View />
              <TouchableOpacity>
                <Text style={styles.textDetail}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DBDBDB',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    elevation: 3,
    paddingHorizontal: 10,
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    color: '#b10d56',
    fontSize: 20,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderTopColor: '#d6d6d6',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
  },
  productImage: {
    height: (90 * 452) / 361,
    width: 90,
  },
  productInfo: {
    marginLeft: 15,
    justifyContent: 'space-between',
    flex: 1,
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    color: '#bcbcbc',
    fontSize: 20,
    fontWeight: '400',
  },
  textPrice: {
    color: '#b10d56',
    fontSize: 20,
  },
  textDetail: {
    color: '#bcbcbc',
    fontSize: 15,
    fontWeight: '400',
  },
});

export default ListProduct;
{
  /* <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('ProductDetail')}>
        <Text>Go Details</Text>
      </TouchableOpacity> */
}
