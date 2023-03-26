import React from 'react';
import Child2Component from './Child2Component';

const Child1Component = (props) => {
    return (
        <div style={{border: '2px outset green', padding: '20px'}}>
            <h2>This is Child 1 Component</h2>
            <p>Count: {props.count} <br /> <code>N&gt;B&gt; This is stateless component</code></p>
            <br /><br />
            <Child2Component count={props.count}/>
        </div>
    );
};

export default Child1Component;