import { combineReducers } from 'redux';
import donationsReducer from './slices/donationsSlice';

const rootReducer = combineReducers({
  donations: donationsReducer,
  // Add other reducers here
});

export default rootReducer;

