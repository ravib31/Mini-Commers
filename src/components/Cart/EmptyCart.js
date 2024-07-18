import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="bg-gray-100 h-[300px] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
