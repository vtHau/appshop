import {combineReducers} from 'redux';
import cateReducer from './category';
import topProductReducer from './topProduct';
import cartReducer from './cart';
import authReducer from './authenticaton';

const rootReducer = combineReducers({
  cateReducer: cateReducer,
  topProductReducer: topProductReducer,
  cartReducer: cartReducer,
  authReducer: authReducer,
});

export default rootReducer;
