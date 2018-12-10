import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './screens/Login/Login';
import Singup from './screens/Signup/Signup';
import Chat from './screens/Chat/Chat';

export default props => (
    
    <Router >
    <Stack key='login'>

        <Scene hideNavBar key='login' component={Login} />
            
        
        <Scene navigationBarStyle={{backgroundColor:'#192f6a'}} navBarButtonColor='#FFF' titleStyle={{color:'#FFF'}} title='Cadastro' key='singUp' component={Singup} /> 

        
        <Scene key='chat' component={Chat} />
    </Stack>

       
    </Router>
);