import React from "react";
import { useCart } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";

const Product9 = () => {
  const { addToCart } = useCart();

  const product = {
    id: 9,
    name: "Poplin shirt",
    price: 2699,
    image:
      "https://image.hm.com/assets/hm/7b/d3/7bd38df2c3ad73bf694bf57bd1adaa71678efd03.jpg?imwidth=1260",
  };

  return (
    <>
    < Header />
    <main className="px-8 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://image.hm.com/assets/hm/7b/d3/7bd38df2c3ad73bf694bf57bd1adaa71678efd03.jpg?imwidth=1260"
            alt="Poplin shirt"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">
            Shirt in cotton poplin with a turn-down collar, classic front and a
            yoke at the back. Long sleeves with a button at the cuffs and a
            slightly rounded hem. Regular fit for comfortable wear and a classic
            silhouette.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            <li>Color: Blue poplin</li>
            <li>Material: Cotton 100%</li>
            <li>Fit: Regular fit</li>
            <li>Dry Clean Only</li>
          </ul>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
    < Footer/>
   </>
  );
};

export default Product9;
