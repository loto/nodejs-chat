import * as types from '../constants/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.RECEIVE_MESSAGE:
      return { ...state, messages: state.messages.concat(action.message) };
    case types.RECEIVE_HISTORY:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};
