import React from 'react';
import './App.css';

class User extends React.Component {

    render() {
        console.warn("check")
        return (
            <div className='App'>
                <h1>User Component {this.props.count}</h1>
            </div>
        );
    }
}

export default User;
