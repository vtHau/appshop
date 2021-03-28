import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg';

const {height, width} = Dimensions.get('window');
const imageWidth = width - 50;
const imageHeight = (imageWidth / 933) * 465;

function Collection(props) {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.text}>Spring Collection</Text>
      </View>
      <View style={{flex: 4, padding: 5}}>
        <Image style={styles.image} source={bannerImage} />
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
  },
});

export default Collection;
