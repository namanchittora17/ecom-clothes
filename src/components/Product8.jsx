import React from 'react'

const Product8 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://www.birkenstock.in/cdn/shop/products/51793_8e6aa142-8e6b-45e5-838a-e02558667881.jpg?v=1685373500&width=2000" alt="BIRKENSTOCK-Arizona Birko-Flor" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">BIRKENSTOCK-Arizona Birko-Flor</h2>
    <p className="text-xl text-gray-700 mb-4">₹6,990</p>
    <p className="text-gray-600 mb-6">
      The BIRKENSTOCK Arizona is a genuine classic that has been delighting both men and women for decades. This simple sandal with two straps stands for timeless design and has long held cult status thanks to its comfort factor. The upper is made from the skin-friendly, hard-wearing synthetic material Birko-Flor®.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Black/brown</li>
      <li>Insole: Real leather</li>
      <li>Outsole: EVA</li>
      <li>Upper: Birko-Flor</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>

  )
}

export default Product8