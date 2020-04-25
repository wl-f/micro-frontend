import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../public-path';

function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log(' app bootstraped');
}

export async function mount(props) {
    console.log('props from main framework', props);
    render();
}

// // 主应用
// window.dispatchEvent(
//     new CustomEvent('master:switchRouter',{detail:{path:'home'}})
// );
//
// // 子应用
// window.addEventListener('master:switchRouter',(event)=>{
//     console.log('switchRouter',event.detail.path)
// });

export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}

// ReactDOM.render(<App />, document.getElementById('root'));

