/* src/redux/rootReducer.js */
import { combineReducers } from 'redux';
import donationsReducer from './slices/donationsSlice';
import userReducer from './slices/userSlice';
import causeReducer from './slices/causeSlice';

const rootReducer = combineReducers({
  donations: donationsReducer,
  user: userReducer,
  cause: causeReducer,
});

export default rootReducer;

