import { createSelector } from 'reselect';

//select main reducer from rootReducer
const selectMainReducer = () => state => state.get('mapsReducer');

//field selector
export const getFields = () => createSelector(
    selectMainReducer(),
    state => state.get('fields').toJS()
);

//loading selector
export const getIsLoading = () => createSelector(
    selectMainReducer(),
    state => state.get('isLoading')
);