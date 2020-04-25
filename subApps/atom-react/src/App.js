import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Link, Route, withRouter, Switch } from 'react-router-dom';


import BlankLayout from './layouts/BlankLayout'
import BasicLayout from './layouts/BasicLayout'


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <h2>首页</h2>
            <hr/>
            <Switch>
                {
                    window.__POWERED_BY_QIANKUN__ && <>
                        <Route path="/" render={props=><BlankLayout {...props}/>}/>
                    </>
                }
                {
                    !window.__POWERED_BY_QIANKUN__ && <>
                        <Route path="/" render={props=><BasicLayout {...props}/>}/>

                    </>
                }
            </Switch>


          </div>
        </Router>
    );
  }
}

// export default withRouter(App);
export default App;
