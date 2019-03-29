import {createStore} from 'redux';
import reducer from './reducer';
let store = createStore(reducer);
export default store;//导出
//2019.3.28