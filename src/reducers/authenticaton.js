import writeStorage from './../utils/writeStorage';
import removeStorage from './../utils/removeStorage';

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

    case 'UPDATE_TOKEN': {
      state.token = action.payload;
      writeStorage('signed', state);

      return {
        ...state,
      };
    }

    case 'UPDATE_INFO': {
      state.user = action.payload;
      writeStorage('signed', state);

      return {
        ...state,
      };
    }

    case 'SIGN_OUT': {
      state.isLogin = false;
      state.token = '';
      state.user = {};

      // removeStorage('signed');
      writeStorage('signed', '');

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
