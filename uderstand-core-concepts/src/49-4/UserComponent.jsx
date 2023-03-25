import React, { useEffect, useState } from 'react';

const User = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increaseFunc = () => setCount(count + 1);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseFunc}>(+) Increase</button>
        </div>
    );
};

export default User;