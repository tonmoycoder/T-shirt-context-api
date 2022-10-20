import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [alu,porta] = useContext(RingContext)
    return (
        <div>
            <h4>Friend</h4>
            <h2>Ring : {alu}</h2>
            <button onClick={()=> porta(alu-1)}>Decrease</button>
        </div>
    );
};

export default Friend;