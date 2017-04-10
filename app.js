import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Route,Link,Switch,BrowserRouter,HashRouter} from 'react-router-dom';
import {createHashHistory} from 'history';
import Index from './component/index';
import Test from './component/test';
import App from './component/app';
import Wa from './component/wa';

render( 
    <HashRouter>
        <div>
                <Route path="/index" component={Index}></Route>
                <Route path="/test" component={Test}></Route>
        </div>
    </HashRouter>,
    document.getElementById('container')
)