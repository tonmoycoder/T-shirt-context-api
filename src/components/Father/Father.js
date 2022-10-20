import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const house = useContext(RingContext)
  return (
    <div>
      <h4>Father</h4>
      <p>
        <small>
          <b>House : {house}</b>
        </small>
      </p>
      <section className="flex">
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
