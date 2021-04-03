import {combineReducers} from 'redux';
import cateReducer from './category';
import topProductReducer from './topProduct';
import cartReducer from './cart';

const rootReducer = combineReducers({
  cateReducer: cateReducer,
  topProductReducer: topProductReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
