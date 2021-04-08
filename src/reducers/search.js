const initialState = {
  search: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH': {
      state.search = action.payload;

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
