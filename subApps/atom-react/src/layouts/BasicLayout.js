import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Route, Switch, Link, } from "react-router-dom";
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";
import Test3 from "../pages/Test3";
import NotFound from "../NotFound";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div style={{height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16,}} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to={'test1'}>Test 1</Link>
              </Menu.Item>
              <Menu.Item key="2"  path={'test1'}>
                <Link to={'test2'}>Test 2</Link>
              </Menu.Item>
              <Menu.Item key="3"  path={'test3'}>
                <Link to={'test3'}>Test 2</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  <Route  path='/test1' component={Test1}/>
                  <Route  path='/test2' component={Test2}/>
                  <Route  path='/test3' component={Test3}/>
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
    )
  }
}

export default BasicLayout
