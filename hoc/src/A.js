import React, { useState } from 'react'

const A = () => {
    const [count, seCount] = useState(0);

    function increment() {
        seCount(count + 1)
    }
    return (
        <div>
            <button onMouseOver={increment}>
                A {count} onMouseOver

            </button>
        </div>
    )
}

export default A