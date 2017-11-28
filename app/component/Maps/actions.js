import { AsyncStorage } from 'react-native'
import axios from 'axios';
import { UPDATE_FIELD, UPDATE_IS_LOADING } from './constants';

export function updateIsLoading(status){
    type: UPDATE_IS_LOADING,
    status
}

export function login(){
    return(dispatch, getState) => {
        const { fields } = getState()
        .get('mapsReducer')
        .toJS();
        const { username, password } = fields;
        dispatch(updateIsLoading(true));

        axios.post('http://c362ae30.ngrok.io/api/login', {
            username,
            password
        })
        .then(response => {
            AsyncStorage.setItem('accesToken', response.data.token.access_token);
            dispatch(updateIsLoading(false));
        })
        .catch(error => console.log("Error", error));
    }
}