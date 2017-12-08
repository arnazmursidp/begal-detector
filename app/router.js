import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

// import Danger from './component/Danger/Danger';
import Maps from './component/Maps'



const Routing = () => ( 
 
    <Router>
    
      <Scene key="root">
        <Scene key="maps" component={Maps} title="Maps" hideNavBar/>
      </Scene>
    
    </Router>
 
)

export default Routing; 