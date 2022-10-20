import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert('t-shirt already added');
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const handleRemoveCart = tshirt =>{
    const remaining = cart.filter(ts => ts._id !== tshirt._id)
    setCart(remaining)
  }

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <Tshirt handleAddtoCart={handleAddtoCart} key={tshirt._id} tshirt={tshirt}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
