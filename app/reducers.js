import { combineReducers } from 'redux-immutable';

//import reducers
import MapsReducer from './component/Maps/reducer';

const rootReducers = combineReducers({
    mapsReducer: MapsReducer
});
  
export default rootReducers;
  