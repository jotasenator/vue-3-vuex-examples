import { createStore } from "vuex";
import counter from './modules/counter';
import data from './modules/data';

export default createStore( {
    modules: {
        counter,
        data,
    }
} );