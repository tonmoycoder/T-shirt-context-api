import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handleAddtoCart}) => {
    const {picture,name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img  src={picture} alt="pic" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={() => handleAddtoCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;