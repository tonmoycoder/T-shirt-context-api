import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Sister</h2>
      <p><small><b>House : {house}</b></small></p>
      <p><small><b>Money : {money} taha ar taha</b></small></p>
      <button onClick={()=> setMoney(money+ money)}>Double</button>
    </div>
  );
};

export default Sister;
