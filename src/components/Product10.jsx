import React from 'react'

function Product10() {
  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://image.hm.com/assets/hm/70/10/7010dd67dd0e9c97ac6489437eee257c5c418106.jpg?imwidth=1260" alt="Slim Fit Cropped trousers" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Slim Fit Cropped trousers</h2>
    <p className="text-xl text-gray-700 mb-4">₹4,799</p>
    <p className="text-gray-600 mb-6">
      Ankle-length trousers in soft cotton twill featuring an elasticated waist, zip fly with a button, diagonal side pockets, jetted back pockets with a button and legs with creases. Slim fit that hugs the contours of your body, creating a fitted silhouette.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: White</li>
      <li>Shell: Cotton 98%, Elastane 2%</li>
      <li>Pocket lining: Polyester 65%, Cotton 35%</li>
      <li>Waist: Polyester 100%</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>
</main>
  )
}

export default Product10