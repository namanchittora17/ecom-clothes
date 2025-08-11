import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div>
      <main className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    <label className="text-gray-600 text-sm">
                      Quantity:
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        className="ml-2 w-16 border rounded px-2 py-1 text-center"
                      />
                    </label>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Subtotal */}
            <div className="text-right border-t pt-6">
              <p className="text-xl font-semibold">
                Subtotal: ₹{totalPrice}
              </p>
              <button
                className="mt-4 px-6 py-3 bg-black text-white rounded text-sm uppercase hover:bg-gray-800"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
