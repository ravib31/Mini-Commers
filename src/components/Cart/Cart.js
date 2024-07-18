import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    // console.log("I Am Clicking")
  };

  return cartItems.length === 0 ? 
    // <h1>Your Cart Is Empty</h1>
    <EmptyCart/>
   : (
    <div className="m-2 p-2">
      <div className="font-bold text-2xl">Cart</div>
      <button
        
        className={"m-4 p-2 bg-red-700 text-white rounded-lg"}
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="m-auto shadow-2xl p-6 w-6/12 h-auto flex justify-between items-center"
        >
          <div>
            <div className="font-bold">{item.title}</div>
            <div>Price - {item.price} ₹</div>
          </div>
          <div>
            <img src={item.image} alt="product" className="w-24 h-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
