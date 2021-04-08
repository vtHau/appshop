import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch, useReducer} from 'react-redux';

import {fetchProductCateRequest} from './../../../../actions/actions';
import backList from './../../../../media/appIcon/backList.png';
import sp1 from './../../../../media/temp/sp1.jpeg';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

function ListProduct(props) {
  const {navigation, route} = props;
  const product = route.params;
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCateRequest(product.id, page));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductCateRequest(product.id, page));
  }, [page]);

  const productCate = useSelector(
    state => state.productCateReducer.productCate,
  );

  const onRefresh = () => {
    setRefresh(true);
    setPage(page + 1);
    setRefresh(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.wrapper}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image style={styles.backStyle} source={backList} />
          </TouchableOpacity>

          <Text style={styles.titleStyle}>{product.name}</Text>
          <View style={{width: 30}}></View>
        </View>
        {productCate.map((value, key) => (
          <View key={key} style={styles.productContainer}>
            <Image style={styles.productImage} source={sp1} />
            <View style={styles.productInfo}>
              <Text style={styles.textName}>{toTitleCase(value.name)}</Text>
              <Text style={styles.textPrice}>{value.price}</Text>
              <Text style={styles.textPrice}>{value.price}</Text>
              <View style={styles.lastRowInfo}>
                <View />
                <TouchableOpacity
                  onPress={() => navigation.push('ProductDetail', value)}>
                  <Text style={styles.textDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
