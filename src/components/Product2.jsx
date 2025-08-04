import React from 'react'

const Product2 = () => {
  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://image.hm.com/assets/hm/9f/3e/9f3e5b6840b1a7809717e2012e1ce3933204a52a.jpg?imwidth=1260" alt="Ivory Oxford Shirt" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Ivory Oxford Shirt</h2>
    <p className="text-xl text-gray-700 mb-4">₹2,499</p>
    <p className="text-gray-600 mb-6">
      Regular-fit shirt in Oxford cotton with a button-down collar, classic front, yoke at the back and an open chest pocket. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Gently rounded hem.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Beige</li>
      <li>Material: Cotton 100%</li>
      <li>Fit: Regular fit</li>
      <li>Dry Clean Only</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>
</main>
  )
}

export default Product2