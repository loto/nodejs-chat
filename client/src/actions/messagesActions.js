import * as types from '../constants/actionTypes';

const receiveMessage = (message) => {
  return {
    type: types.RECEIVE_MESSAGE,
    message,
  };
};

const receiveHistory = (messages) => {
  return {
    type: types.RECEIVE_HISTORY,
    messages,
  };
};

export { receiveMessage, receiveHistory };
