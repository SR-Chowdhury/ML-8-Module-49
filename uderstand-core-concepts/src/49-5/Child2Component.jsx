import React from 'react';

const Child2Component = (props) => {
    return (
        <div style={{border: '2px outset gray', padding: '20px'}}>
            <h3>This is Child 2 Component</h3>
            <p>Count: {props.count} <br /> <code>N&gt;B&gt; This is stateless component</code></p>
        </div>
    );
};

export default Child2Component;