import { createStore } from 'redux';
import reducer from '../reduxs/reducer';

const store = createStore(reducer);

export default store;