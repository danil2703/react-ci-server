import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  settings: settingsReducer,
  modal: modalReducer,
});

export default reducers;
