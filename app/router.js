import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

// redux
import { Provider, connect } from 'react-redux';
const RouterWithRedux = connect()(Router);
import { store } from './store';

// import component;
import Maps from './component/Maps'



const Routing = () => ( 
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="maps" component={Maps} title="Maps" hideNavBar/>
      </Scene>
    </RouterWithRedux>
  </Provider>
)

export default Routing; 