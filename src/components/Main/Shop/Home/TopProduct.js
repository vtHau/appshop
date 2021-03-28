import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const {height, width} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

function TopProduct(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContaienr}>
        <Text style={styles.title}>Top Product</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <Text style={styles.productName}>Galaxy S21 Ultra</Text>
          <Text style={styles.productPrice}>123.345.678</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  titleContaienr: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  title: {
    color: '#3dd3cf',
    fontSize: 20,
  },
  productContainer: {
    backgroundColor: 'white',
    width: productWidth,
    paddingBottom: 10,
    marginBottom: 15,
    shadowColor: '#2E272B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 2,
  },
  productImage: {
    width: productWidth,
    height: productHeight,
  },
  productName: {
    marginVertical: 5,
    color: '#3dd3cf',
    paddingLeft: 10,
  },
  productPrice: {
    color: 'grey',
    paddingLeft: 10,
  },
});

export default TopProduct;
