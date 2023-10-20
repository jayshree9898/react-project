import React, { useEffect } from 'react';
import './App.css';

function User(props) {

    useEffect(() => {
        alert("count is" + props.count)
    }, [props.count]);

    return (
        <div className="App">
            <h1>count props{props.count}</h1>
            <h1>data props{props.data}</h1>
        </div>
    );
}

export default User;
