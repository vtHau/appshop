import CallAPI from './../utils/CallAPI';

export const fetchCateRequest = () => {
  return dispatch => {
    CallAPI('', 'GET', null).then(res => {
      dispatch(fetchCate(res.data.type));
    });
  };
};

export const fetchCate = cate => {
  return {
    type: 'FETCH_CATE',
    payload: cate,
  };
};

export const fetchTopProductRequest = () => {
  return dispatch => {
    CallAPI('', 'GET', null).then(res => {
      dispatch(fetchTopProduct(res.data.product));
    });
  };
};

export const fetchTopProduct = topProduct => {
  return {
    type: 'FETCH_TOP_PRODUCT',
    payload: topProduct,
  };
};

export const addCate = cate => {
  return {
    type: 'ADD_CATE',
    payload: cate,
  };
};