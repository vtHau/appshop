import {combineReducers} from 'redux';
import cateReducer from './category';
import topProductReducer from './topProduct';
import cartReducer from './cart';
import authReducer from './authenticaton';
import productCateReducer from './productCate';

const rootReducer = combineReducers({
  cateReducer: cateReducer,
  topProductReducer: topProductReducer,
  cartReducer: cartReducer,
  authReducer: authReducer,
  productCateReducer: productCateReducer,
});

export default rootReducer;
