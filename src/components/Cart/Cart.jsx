import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const cart= props.cart  //?option 1 to get props
  //   const { cart } = props; //?option 2 to get value by destructuring props.
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;

  for (const product of cart) {
    //   total += product.price; //?option 1 to get total price
    totalPrice = totalPrice + product.price; //?option 2 and both works the same
    totalShipping = totalShipping + product.shipping;
    }
    
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalShipping + totalPrice + tax;

  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping} </p>
      <p>Tax:{tax.toFixed(2)} </p>
      <h2>Grand Total:{grandTotal.toFixed(2)} </h2>
    </div>
  );
};
import "./Cart.css";
export default Cart;
