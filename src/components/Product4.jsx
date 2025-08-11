import React from "react";
import { useCart } from "./CartContext";

const Product4 = () => {
  const { addToCart } = useCart();

  const product = {
    id: 4,
    name: "Double-Breasted Coat",
    price: 6999,
    image:
      "https://image.hm.com/assets/hm/25/41/2541605008b96e486c16af0710da1d1af5a97b09.jpg?imwidth=1260",
  };

  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://image.hm.com/assets/hm/25/41/2541605008b96e486c16af0710da1d1af5a97b09.jpg?imwidth=1260"
            alt="Double-Breasted Coat"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">
            Double-breasted jacket in a soft weave featuring peak lapels with a
            decorative buttonhole, a chest pocket, jetted front pockets with a
            flap and three inner pockets. Decorative buttons at the cuffs and a
            double back vent. Regular fit for comfortable wear and a classic
            silhouette. Lined.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            <li>Color: Brown</li>
            <li>Material: Polyester</li>
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
  );
};

export default Product4;
