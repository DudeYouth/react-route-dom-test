import React,{ Component } from 'react';
import { Link,Route,Switch } from 'react-router-dom';
import App from './app';
export default class Index extends Component {
    render() {
        return <div>
                    <h1>Index Word!</h1>
                    <Route  path='/index/app' component={App}></Route>
                </div>
    }
}