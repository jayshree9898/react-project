import React from 'react'

export default class Student extends React.Component {
    render() {
        return (
            <>
                <div>Name : {this.props.name} </div>
                <div>Email : {this.props.email} </div>
            </>
        )
    }
}