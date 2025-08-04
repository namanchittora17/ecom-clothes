import React from 'react'

const Product9 = () => {
  return (
<div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://image.hm.com/assets/hm/7b/d3/7bd38df2c3ad73bf694bf57bd1adaa71678efd03.jpg?imwidth=1260" alt="Poplin shirt" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Poplin shirt</h2>
    <p className="text-xl text-gray-700 mb-4">₹2,699</p>
    <p className="text-gray-600 mb-6">
      Shirt in cotton poplin with a turn-down collar, classic front and a yoke at the back. Long sleeves with a button at the cuffs and a slightly rounded hem. Regular fit for comfortable wear and a classic silhouette.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Blue poplin</li>
      <li>Material: Cotton 100%</li>
      <li>Fit: Regular fit</li>
      <li>Dry Clean Only</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>

  )
}

export default Product9