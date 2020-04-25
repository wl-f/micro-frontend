import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted } from 'qiankun';
import { render, genActiveRule } from './render'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            selectedKey:['1'],
            currentSub: ''
        };
    }
    componentDidMount() {

        this._defaultSelectKey();
        this._defaultCurrentSub();
        render({ appContent: '', loading: true });


        registerMicroApps(
            [
            { name: 'react', entry: '//localhost:7100', render, activeRule: genActiveRule('/react') },
                {name: 'subTest', entry: '//localhost:8010', render, activeRule: genActiveRule('/subTest')},
                // {name: 'device', entry: '//localhost:8001', render, activeRule: genActiveRule('/device')},
            ],
            );
        setDefaultMountApp('/react');
        start({
            prefetch: true,
            jsSandbox: true,
            singular: true,
            fetch: window.fetch,
        });

        runAfterFirstMounted(() => {
            console.log('[MainApp] first app mounted');
        });
    }

    _defaultCurrentSub = () =>{
        let  pathname = location.pathname.replace('/','');
        console.log('pathname--',pathname);
        if (pathname){
            this.setState({currentSub: pathname});

        }else {
            this.setState({currentSub: 'react'});
        }

    };

    _defaultSelectKey = () =>{
        // console.log('location--',location)
        if (location.pathname.indexOf('react') > -1){
            this.setState({selectedKey:['1']})
        }else if (location.pathname.indexOf('subTest') > -1){
            if (location.hash.indexOf('test1') > -1){
                this.setState({selectedKey:['2']})
            }else if (location.hash.indexOf('test2') > -1){
                this.setState({selectedKey:['3']})
            } else if (location.hash.indexOf('test3') > -1){
                this.setState({selectedKey:['4']})
            }
        }
    };


    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    _onClick = (key,subApp,path) =>{

        const { currentSub } = this.state;
        if (subApp !== currentSub){
            let url = path ? subApp + '#/'+path : subApp;
            history.pushState(null, subApp, url);
            this.setState({currentSub:subApp})
        }else {
            window.dispatchEvent(
                new CustomEvent('master:routerPush',{detail:{path}})
            );
        }

        this.setState({selectedKey:[key]})
    };
    render() {
        // console.log('***********************************')
        // console.log('currentSub---------',this.state.currentSub)
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={{height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16,}} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} selectedKeys={this.state.selectedKey} mode="inline">
                        <Menu.Item key="1">SubApp1
                            <a onClick={()=>{this._onClick('1','react')}}>SubApp2</a>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span>SubApp2</span>}
                        >
                            <Menu.Item key="2">
                                <a onClick={()=>{this._onClick('2','subTest','test1')}}>Test 1</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a onClick={()=>{this._onClick('3','subTest','test2')}}>Test 2</a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a onClick={()=>{this._onClick('4','subTest','test3')}}>Test 3</a>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div id="container" className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}


export default App;
