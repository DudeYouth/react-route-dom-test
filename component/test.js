import React,{ Component } from 'react';
import { Link,Route,Switch } from 'react-router-dom'
import App from './app';
import Wa from './wa';
export default class Test extends Component {
    render() {
        return <div>
                    <div>
                        <div><Link to="/test/wa">testwa</Link></div>
                        <div><Link to="/test/app">testapp</Link></div>
                        <div><Link to="/index/app">testapp</Link></div>
                    </div>
                    <Route path="/test/wa" component={Wa}></Route>
                    <Route path="/test/app" component={App}></Route>
                </div>
    }
}