import { useState } from 'react';

function Login() {

    const [userId, setUserId] = useState("")
    const [userPass, setUserPass] = useState("")

    function loginHandle(e) {
        e.preventDefault()
    }

    function userHandler(e) {
        console.log(e.target.value);
    }

    return (
        <>
            <form onSubmit={loginHandle}>
                <h1> Login</h1>
                <input type="text" placeholder="Enter User ID" onChange={userHandler} />
                <br /><br />
                <input type="text" placeholder="Enter User Password" />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login