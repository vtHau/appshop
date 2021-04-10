const initialState = {
  orderHistory: [],
};

const orderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_HISTORY': {
      state.orderHistory = action.payload;
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default orderHistoryReducer;
