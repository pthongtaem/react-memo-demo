import { combineReducers } from 'redux';
import matrixReducer from './matrix';

const AppReducer = combineReducers({
  matrix: matrixReducer,
});

export default AppReducer;
