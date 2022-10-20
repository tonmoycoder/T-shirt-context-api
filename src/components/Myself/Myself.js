import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const Myself = () => {
    const house = useContext(RingContext)
  return (
    <div>
      <h2>Myself</h2>
      <p>
        <small>
          <b>House : {house}</b>
        </small>
      </p>
      <section>
        <Special></Special>
      </section>
    </div>
  );
};

export default Myself;
