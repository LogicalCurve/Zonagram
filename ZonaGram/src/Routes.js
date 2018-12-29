import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './screens/Login/Login';
import Singup from './screens/Signup/Signup';
import Chat from './screens/Chat/Chat';
import Main from './screens/Main/Main';
export default props => (
    <Router >
        <Stack key='login'>
        	<Scene key='main' component={Main} />

        	<Scene key='chat' component={Chat} />

            <Scene hideNavBar key='login' component={Login} />

            <Scene navigationBarStyle={{backgroundColor:'#192f6a'}} navBarButtonColor='#FFF' titleStyle={{color:'#FFF'}} title='Cadastro' key='singUp' component={Singup} />
        </Stack>
    </Router>
);
