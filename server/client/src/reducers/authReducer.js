import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // null for when we don't know if logged in or not
  console.log('action', action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if action.payload comes back with empty string (not logged in) give false
    default:
      return state;
  }
}
