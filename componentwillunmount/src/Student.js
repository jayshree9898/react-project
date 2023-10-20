import React from 'react';
import './App.css';

class Student extends React.Component {

    componentWillUnmount() {
        console.warn("Component will unmount")
    }

    render() {
        return (
            <div className="App" >

                <h1>Student Component</h1>
            </div>
        );
    }
}

export default Student;
