import CallAPI from './../utils/CallAPI';
import readStorage from './../utils/readStorage';

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

export const fetchCartFromAsyncStorage = () => {
  return dispatch => {
    readStorage('cart').then(res => {
      dispatch(fetchCart(res));
    });
  };
};

export const fetchCart = cart => {
  return {
    type: 'FETCH_CART',
    payload: cart,
  };
};

export const addCate = cate => {
  return {
    type: 'ADD_CATE',
    payload: cate,
  };
};

export const addCart = product => {
  return {
    type: 'ADD_CART',
    payload: product,
  };
};

export const updateCart = product => {
  return {
    type: 'UPDATE_CART',
    payload: product,
  };
};

export const deleteProductFromCart = id => {
  return {
    type: 'DELETE_PRODUCT_FROM_CART',
    payload: id,
  };
};

export const signed = data => {
  return {
    type: 'SIGNED',
    payload: data,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};

export const checkToken = () => {
  return async dispatch => {
    const resp = await readStorage('signed');

    if (resp !== null) {
      const {token} = resp;

      CallAPI('/check_login.php', 'POST', JSON.stringify({token}))
        .then(res => {
          if (res.data !== 'TOKEN_KHONG_HOP_LE') {
            dispatch(signed(res.data));
          }
        })
        .catch(() => {
          console.log('error check login');
        });
    }
  };
};
