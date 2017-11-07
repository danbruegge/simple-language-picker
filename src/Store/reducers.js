import { combineReducers } from 'redux';
import { SET_LANGUAGE } from './actions';

const initialLanguage = 'en';

function language(state = initialLanguage, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language
    default:
      return state
  }
};

const reducer = combineReducers({
  language
})

export default reducer;
