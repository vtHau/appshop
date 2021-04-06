import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch, useReducer} from 'react-redux';
import {fetchCateRequest} from './../../../../actions/actions';
import * as Config from './../../../../Config/config';

import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');
const imageWidth = width - 50;
const imageHeight = (imageWidth / 933) * 465;
const URLImgae = Config.API_URL + Config.URL_IMAGE_CATE;
function Category(props) {
  const {navigation} = props;

  const cate = useSelector(state => state.cateReducer.cate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCateRequest());
  }, [dispatch]);

  const goListProduct = () => {
    navigation.push('ListProduct');
  };

  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.text}>Spring Category</Text>
      </View>
      <View style={{flex: 4, padding: 5}}>
        <Swiper autoplay autoplayTimeout={2.5}>
          {cate.length !== 0 &&
            cate.map((value, key) => (
              <TouchableOpacity key={value.id} onPress={goListProduct}>
                <ImageBackground
                  style={styles.image}
                  source={{
                    uri: `${URLImgae}${value.image}`,
                  }}>
                  <Text style={styles.titleImage}>{value.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.33,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: '#afafaf',
    fontSize: 22,
  },
  image: {
    width: imageWidth,
    height: imageHeight + 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    color: '#afafaf',
    fontSize: 22,
  },
});

export default Category;
