import React, { useState } from 'react';
import Child1Component from './Child1Component';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const increaseFunc = () => setCount(count + 1);
    return (
        <div style={{border: '2px outset red', padding: '20px'}}>
            <h1>This is parent Component</h1>
            <p>Count: {count} <br /> <code>N&gt;B&gt; This is stateful component</code></p>
            <button onClick={increaseFunc}>(+) Increase</button> <br /><br />
            <Child1Component count={count} />
        </div>
    );
};

export default ParentComponent;