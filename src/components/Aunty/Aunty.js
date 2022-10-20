import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const house = useContext(RingContext)
      return (
    <div>
      <h2>Aunty</h2>
      <p>
        <small>
          <b>House : {house}</b>
        </small>
      </p>
      <section className="flex">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
