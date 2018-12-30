import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Chat from './screens/Chat/Chat';
import Main from './screens/Main/Main';
export default props => (


    <Router >
        <Stack key='login'>
            <Scene hideNavBar initial key='login' component={Login} />
            <Scene key='main' component={Main} />
            <Scene navigationBarStyle={{ backgroundColor: '#192f6a' }} navBarButtonColor='#FFF' titleStyle={{ color: '#FFF' }} title='Cadastro' key='signUp' component={Signup} />
            <Scene hideNavBar key='login' component={Login} />
            <Scene key='chat' component={Chat}/>
        </Stack>
    </Router>
);
