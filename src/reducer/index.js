import {combineReducers} from 'redux';
import contentReducer from './contentReducer';

const allReducers = combineReducers({
  contentReducer,
});

export default allReducers;
