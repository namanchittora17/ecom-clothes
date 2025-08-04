import React from 'react'

const Product7 = () => {
  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10">
  <div>
    <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VC/2VC018/9Z2F0002/2VC018_9Z2_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Parada - Saffiano Leather Travel Bag" className="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <h2 className="text-4xl font-bold mb-4">Parada - Saffiano Leather Travel Bag
    </h2>
    <p className="text-xl text-gray-700 mb-4">₹16,500</p>
    <p className="text-gray-600 mb-6">
      This elegant duffle bag in Saffiano leather with all-around zipper and nylon shoulder strap has rigorous design. The leather name tag and metal lock engraved with the lettering logo decorate this accessory.
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
      <li>Color: Black</li>
      <li>Leather handles</li>
      <li>Detachable adjustable woven nylon shoulder strap</li>
      <li>Interior with two zipped pockets</li>
    </ul>
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
  </div>
</div>
</main>
  )
}

export default Product7