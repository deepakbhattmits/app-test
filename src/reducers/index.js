/** @format */

import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';
// combine reducer

export default combineReducers({
	comments: commentsReducer,
	auth: authReducer
});
