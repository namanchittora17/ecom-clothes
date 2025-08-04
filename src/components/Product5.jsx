import React from 'react'

const Product5 = () => {
  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://image.hm.com/assets/hm/98/22/98229fb844ba795513d06369c1fd34477301bdab.jpg?imwidth=1260" alt="Silk Tie" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Silk Tie</h2>
    <p className="text-xl text-gray-700 mb-4">₹899</p>
    <p className="text-gray-600 mb-6">
      Classic tie in woven fabric.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Black/Striped</li>
      <li>Material: Polyester 100%</li>
      <li>Fit: Regular fit</li>
      <li>Dry Clean Only</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>
</main>
  )
}

export default Product5