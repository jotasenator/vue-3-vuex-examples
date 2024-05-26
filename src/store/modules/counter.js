const state = {
    counter: 0
};

const mutations = {
    INCREASE_COUNTER ( state ) {
        state.counter++;
    },
    DECREASE_COUNTER ( state ) {
        state.counter--;
    },
    RESET_COUNTER ( state ) {
        state.counter = 0;
    }
};

const getters = {
    counter: state => state.counter
};

export default {
    state,
    mutations,
    getters
};