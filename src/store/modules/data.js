const state = {
    data: {}
};

const mutations = {
    SET_DATA ( state, data ) {
        state.data = data;
    }
};

const actions = {
    fetchData ( { commit }, url ) {
        fetch( url )
            .then( response => response.json() )
            .then( json => {
                commit( 'SET_DATA', json );
            } );
    }
};

const getters = {
    data: state => state.data
};

export default {
    state,
    mutations,
    actions,
    getters
};