const initialState = {
  productCate: [],
};

const productCateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_PRODUCT_CATE': {
      state.productCate = [...state.productCate, ...action.payload];

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default productCateReducer;
