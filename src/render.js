import React from 'react';
import ReactDOM from 'react-dom';

function Render(props) {
    const { content, loading } = props;
    return (
        <>
            {loading && (
                <h4 >Loading...</h4>
            )}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}

export function render({ appContent, loading }) {
    const container = document.getElementById('container');
    // console.log('container---',container)
    // console.log('appContent---',appContent)
    ReactDOM.render(<Render loading={loading} content={appContent} />, container);
}

export function genActiveRule(routerPrefix) {
    // console.log('location.pathname----',location)
    // console.log('location.pathname.startsWith(routerPrefix)-------',location.pathname.startsWith(routerPrefix))

    return location => location.pathname.startsWith(routerPrefix);
}


