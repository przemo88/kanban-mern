/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  lanes,
  notes
});
