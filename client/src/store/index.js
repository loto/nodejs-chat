import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

export default store;
