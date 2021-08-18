import React, { Component, useState, Fragment } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    const [count, setCount] = useState(0); // this destructor has replaced the two lines below.
    // const count = array[0]; 
    // const  setState = array[1];
    const [name, setName] = useState("");
    // hooks cannot be called inside loops, conditions and nexted functions

    useDocumentTitle(`${name} has clicked ${count} times!`);

        return (
            <Fragment>
                <input type="text" onChange={e => setName(e.target.value)} />
                <div>
                    {name} has clicked {count} times!
                </div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </Fragment>
        );
}

export default Counter;