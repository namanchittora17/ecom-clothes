import React from "react";
import { useCart } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";


const Product3 = () => {
  const { addToCart } = useCart();

  const product = {
    id: 3,
    name: "Cream Chinos",
    price: 2799,
    image:
      "https://image.hm.com/assets/hm/79/6c/796cdecdc61d791a0aad0a52ad401cc0798be506.jpg?imwidth=1260",
  };

  return (
    <>
    < Header />
    <main className="px-8 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://image.hm.com/assets/hm/79/6c/796cdecdc61d791a0aad0a52ad401cc0798be506.jpg?imwidth=1260"
            alt="Cream Chinos"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">
            Chinos in stretch cotton twill with a zip fly and button, diagonal
            side pockets and welt back pockets with a button. Slim fit that hugs
            the contours of your body, creating a fitted silhouette.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            <li>Color: Beige</li>
            <li>Material: Cotton 100%</li>
            <li>Fit: Slim fit</li>
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

export default Product3;
