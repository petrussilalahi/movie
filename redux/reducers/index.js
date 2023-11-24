import { combineReducers } from 'redux';
import favReducer from './favReducer';
import saveSearchReducer from './saveSearchReducer';
// import {accountReducer} from './accountReducers'

export default combineReducers({  favReducer, saveSearchReducer });