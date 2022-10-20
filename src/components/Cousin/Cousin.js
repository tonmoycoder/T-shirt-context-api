import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const house = useContext(RingContext)
  return (
    <div>
      <h4>Cousin</h4>
      <p>
        <small>
          <b>House : {house}</b>
        </small>
        <section>
            <Friend></Friend>
        </section>
      </p>
    </div>
  );
};

export default Cousin;
