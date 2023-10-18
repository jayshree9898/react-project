import { useState } from 'react';


function Profile() {

    const [loggedIn, setLoggedIn] = useState(2)

    return (
        <>
            {loggedIn === 1 ? <h1>Welcome user1</h1> :
                loggedIn === 2 ? <h1>Welcome user2</h1> :
                    <h1>Welcome guest</h1>
            }

        </>
    )

}

export default Profile