import React, { useState } from 'react'

const B = (props) => {
    const [count, seCount] = useState(0);

    function increment() {
        seCount(count + 1)
    }
    return (
        <div>
            <button onMouseOver={increment}>
            B {count} onMouseOver

            </button>
        </div>
    )
}

export default B