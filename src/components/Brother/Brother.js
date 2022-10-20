import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const house = useContext(RingContext)
  return (
    <div>
      <h2>Brother</h2>
      <p><small><b>House : {house}</b></small></p>
    </div>
  );
};

export default Brother;
