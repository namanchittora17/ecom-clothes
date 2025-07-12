import React from "react";

const Cart = () => {
  return (
    <div>
      <main className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <form action="order-success.html" method="GET" className="space-y-6">
          {/* Sample Cart Item */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://image.hm.com/assets/hm/39/0b/390bee10c8153d8560a0c4b38f03106845f93709.jpg?imwidth=1260"
                alt="Tweed Blazer"
                className="w-20 h-28 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold text-lg">Tweed Blazer</h4>
                <p className="text-gray-600 text-sm">Size: xl</p>
                <label className="text-gray-600 text-sm">
                  Quantity:
                  <input
                    type="number"
                    name="quantity1"
                    min={1}
                    defaultValue={1}
                    className="ml-2 w-16 border rounded px-2 py-1 text-center"
                  />
                </label>
              </div>
            </div>
            <p className="font-medium">₹4,999</p>
          </div>
          {/* Additional Cart Item */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://image.hm.com/assets/hm/70/10/7010dd67dd0e9c97ac6489437eee257c5c418106.jpg?imwidth=1260"
                alt="Slim Fit Cropped trousers"
                className="w-20 h-28 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  Slim Fit Cropped trousers
                </h4>
                <p className="text-gray-600 text-sm">Size: L</p>
                <label className="text-gray-600 text-sm">
                  Quantity:
                  <input
                    type="number"
                    name="quantity2"
                    min={1}
                    defaultValue={1}
                    className="ml-2 w-16 border rounded px-2 py-1 text-center"
                  />
                </label>
              </div>
            </div>
            <p className="font-medium">₹4,799</p>
          </div>
          {/* Subtotal and Order */}
          <div className="text-right border-t pt-6">
            <p className="text-xl font-semibold">Subtotal: ₹9,798</p>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-black text-white rounded text-sm uppercase hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Cart;
