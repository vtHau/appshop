import writeStorage from './../utils/writeStorage';
import readStorage from './../utils/readStorage';

const initialState = {
  isLogin: false,
  token: '',
  user: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNED': {
      const {token, user} = action.payload;

      state.isLogin = true;
      state.token = token;
      state.user = user;

      writeStorage('signed', state);

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
