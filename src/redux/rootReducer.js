import { combineReducers } from 'redux';
import { panelReducer } from './panelReducer';

export const rootReducer = combineReducers({
    panel: panelReducer,
})