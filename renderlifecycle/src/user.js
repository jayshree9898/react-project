import React from 'react';

//using props
// class User extends React.Component {
//     render() {
//         console.warn("render Method", this.props)
//         return (
//             <>
//                 <h1>User Component {this.props.name}</h1>
//             </>
//         )
//     }
// }



//.........using state
class User extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "abc@gmail.com"
        }
    }

    render() {
        console.warn("Render Method : ", this.state.email)
        return (
            <>
                <h1>User Component </h1>
                <button onClick={() => this.setState({ email: "xyz@gmail.com" })}>Update email</button>
            </>
        )
    }
}



export default User