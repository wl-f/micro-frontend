import React from 'react';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { Icon } from 'antd';

import GlobalFooter from '../components/GlobalFooter';
import styles from './BlankLayout.less';


import Login from '../pages/Login';
import NotFound from '../NotFound'
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";
import Test3 from "../pages/Test3";

const copyright = <div>Copyright <Icon type="copyright" /> 2018 ecarx.com.cn</div>;

class BlankLayout extends React.PureComponent {

    componentDidMount() {
        console.log('this.props----',this.props)
        window.addEventListener('master:routerPush',(event)=>{
            console.log('master:routerPush',event.detail.path)
            this.props.history.push(event.detail.path)
        });
    }

    render() {
    return (
      <div className={styles.container}>
          <Switch>
              <Route path='/login' component={Login}/>
              <Route  path='/test1' component={Test1}/>
              <Route  path='/test2' component={Test2}/>
              <Route  path='/test3' component={Test3}/>
              <Route component={NotFound} />
          </Switch>

          {this.props.children}
      </div>
    );
  }
}

// export default  withRouter(BlankLayout);
export default  BlankLayout;
