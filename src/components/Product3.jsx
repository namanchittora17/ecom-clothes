import React from 'react'

const Product3 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://image.hm.com/assets/hm/79/6c/796cdecdc61d791a0aad0a52ad401cc0798be506.jpg?imwidth=1260" alt="Cream Chinos" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Cream Chinos</h2>
    <p className="text-xl text-gray-700 mb-4">₹2,799</p>
    <p className="text-gray-600 mb-6">
      Chinos in stretch cotton twill with a zip fly and button, diagonal side pockets and welt back pockets with a button. Slim fit that hugs the contours of your body, creating a fitted silhouette.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Beige</li>
      <li>Material: Cotton 100%</li>
      <li>Fit: Slim fit</li>
      <li>Dry Clean Only</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>

  )
}

export default Product3