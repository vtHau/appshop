const initialState = {
  cate: [],
};

const cateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATE': {
      return {
        cate: [...state.cate, ...action.payload],
      };
    }

    case 'FETCH_CATE': {
      const newCate = action.payload;

      return {
        cate: [...newCate],
      };
    }

    default:
      return state;
  }
};

export default cateReducer;
