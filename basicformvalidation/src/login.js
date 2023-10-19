import { useState } from 'react';

function Login() {

    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {

        if (userId.length < 3 || userPass.length < 3) {
            alert("type Correct Values")
        }
        else {
            alert("All good")
        }
        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value

        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUserId(item)

    }

    function passHandler(e) {
        let item = e.target.value

        if (item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setUserPass(item)

    }

    return (
        <>
            <form onSubmit={loginHandle}>
                <h1> Login</h1>
                <input type="text" placeholder="Enter User ID" onChange={userHandler} />{userErr ? <span>User Not Valid</span> : ""}
                <br /><br />
                <input type="password" placeholder="Enter User Password" onChange={passHandler} />{passErr ? <span>Invalid Password</span> : ""}
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login