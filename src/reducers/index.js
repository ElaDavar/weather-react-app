import cardsReducer from './cards';
import degreeReducer from './degree';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  cards: cardsReducer,
  degree: degreeReducer
});

export default allReducers;