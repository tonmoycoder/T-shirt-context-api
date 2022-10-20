import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please buy at least one item</p>;
  } else if (cart.length === 1) {
    message = (
      <p>
        tui ato fokir kan!! <br />
        arekta kin fokir chan
      </p>
    );
  } else {
    message = <p>Thank you for your buy</p>;
  }
  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : `purple`}>cart summary</h3>
      <h3 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>
        order quantity{cart.length}
      </h3>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? (
        <p>tor ki tinta girlfriend naki</p>
      ) : (
        <p>tinta kin ,na hole tor khobor ase</p>
      )}
      <h2>and operator</h2>
      {cart.length === 2 && (
        <p>
          <b> Double item</b>
        </p>
      )}
      <h2>Or operator</h2>
      {cart.length === 4 || (
        <p>
          <b>Charta item hoi nai</b>
        </p>
      )}
    </div>
  );
};

export default Cart;

/* 
conditional rendering method
1.Use element in a variable and then use if-else to set value.
2 . ternary operation condition ? true : false
3. && operator (if condition is true i want to display somethings)
4. || operator (if condition is false i want to display somethings)
5. Also can use conditional css with ` ` or without carret
*/
