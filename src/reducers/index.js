
import { combineReducers } from 'redux';
import { diaryReducer } from './diary';

const AppReducer = combineReducers({
  diary: diaryReducer
});


export default AppReducer