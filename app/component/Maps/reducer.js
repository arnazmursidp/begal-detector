import { fromJS } from 'immutable';
import { UPDATE_FIELD, UPDATE_IS_LOADING } from './constants';

const initialState = fromJS({
    fields: {
      username: 'aditia',
      password: 'apaaja'
    },
    isLoading: false
});

function mapsReducer(state = initialState, action){
    switch (action.type){
        case UPDATE_FIELD:
            return state.setIn([ 'fields', action.field ], action.status);
        case UPDATE_IS_LOADING:
            return state.set('isLoading', action.status);
        default: return state;
    }
}