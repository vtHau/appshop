import {combineReducers} from 'redux';
import cateReducer from './category';
import topProductReducer from './topProduct';

const rootReducer = combineReducers({
  cateReducer: cateReducer,
  topProductReducer: topProductReducer,
});

export default rootReducer;
