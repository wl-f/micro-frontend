
import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1 type="404" style={{ minHeight: 500, height: '80%' }} >404</h1>
        )
    }
}

export default NotFound;
