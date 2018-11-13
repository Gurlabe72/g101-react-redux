import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import githubReducer from './Github/github.reducer';

export default combineReducers({
  app: appReducer,
  github: githubReducer
});