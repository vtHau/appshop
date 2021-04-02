const initialState = {
  topProduct: [],
};

const topProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_PRODUCT': {
      const newTopProduct = action.payload;

      return {
        topProduct: [...newTopProduct],
      };
    }

    default:
      return state;
  }
};

export default topProductReducer;
