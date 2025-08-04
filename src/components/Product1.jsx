const Product1 = () => {
  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10">
    <div>
      <img src="https://image.hm.com/assets/hm/39/0b/390bee10c8153d8560a0c4b38f03106845f93709.jpg?imwidth=1260" alt="Tweed Blazer" className="w-full rounded-lg shadow-md" />
    </div>
    <div>
      <h2 className="text-4xl font-bold mb-4">Tweed Blazer</h2>
      <p className="text-xl text-gray-700 mb-4">₹4,999</p>
      <p className="text-gray-600 mb-6">
        Crafted from premium wool blend, this timeless Tweed blazer is designed for elegance and sophistication. Ideal for formal occasions and casual layering.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
        <li>Color: Greige/Checked</li>
        <li>Material: Wool Blend</li>
        <li>Fit: Tailored Fit</li>
        <li>Dry Clean Only</li>
      </ul>
      <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 rounded-lg">Add to Cart</button>
    </div>
  </div>
</main>
  )
}

export default Product1