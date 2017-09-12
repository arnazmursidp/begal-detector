import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Login from './component/Login';
import Maps from './component/Maps'



const Routing = () => ( 
 
    <Router>
    
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar/>
        <Scene key="maps" component={Maps} title="Maps" hideNavBar/>
      </Scene>
    
    </Router>
 
)

export default Routing; 