import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div>
        {/* Hero Section */}
        <section
          style={{ backgroundColor: "#b6ad8e" }}
          className="text-center py-20 px-4 bg-gray-50"
        >
          <h2 className="text-5xl font-bold mb-4">The Old Money Collection</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            Discover refined vintage menswear that captures timeless charm and
            high society style. Crafted for those who dress to impress—subtly.
          </p>
          <div className="flex justify-center items-center w-full p-4">
            <img
              src="https://corporate.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_Corporate-Library/default/dw5f8219df/assets/images/LUXURY/2025_LUXURY_BANNERS-PurpleLabel.jpg"
              alt="Look 1"
              className="rounded-lg shadow max-w-full h-auto sm:w-1/2 md:w-1/3 lg:w-full
    xl-1/2"
            />
          </div>
        </section>
        {/* Featured Preview */}
        <section className="px-8 py-16">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Sample product previews */}
            {/* Product1 */}
            <a href="/tweed-blazer">
            <div className="border rounded-lg p-4 text-center">
              <img
                className="rounded-lg"
                src="https://image.hm.com/assets/hm/39/0b/390bee10c8153d8560a0c4b38f03106845f93709.jpg?imwidth=1260"
                alt="Blazer"
              />
              <h4 className="text-lg font-semibold">Tweed Blazer</h4>
              <p className="text-gray-600">₹4,999</p>
            </div>
            </a>
             {/* Product2 */}
             <a href="/ivory-shirt">
            <div className="border rounded-lg p-4 text-center">
              <img
                className="rounded-lg"
                src="https://image.hm.com/assets/hm/9f/3e/9f3e5b6840b1a7809717e2012e1ce3933204a52a.jpg?imwidth=1260"
                alt="Shirt"
              />
              <h4 className="text-lg font-semibold">Ivory Oxford Shirt</h4>
              <p className="text-gray-600">₹2,499</p>
            </div>
            </a>
             {/* Product3 */}
             <a href="/cream-chinos">
            <div className="border rounded-lg p-4 text-center">
              <img
                className="rounded-lg"
                src="https://image.hm.com/assets/hm/79/6c/796cdecdc61d791a0aad0a52ad401cc0798be506.jpg?imwidth=1260"
                alt="Trousers"
              />
              <h4 className="text-lg font-semibold">Cream Chinos</h4>
              <p className="text-gray-600">₹2,799</p>
            </div>
            </a>
             {/* Product4 */}
             <a href="/breasted-coat">
            <div className="border rounded-lg p-4 text-center">
              <img
                className="rounded-lg"
                src="https://image.hm.com/assets/hm/25/41/2541605008b96e486c16af0710da1d1af5a97b09.jpg?imwidth=1260"
                alt="Coat"
              />
              <h4 className="text-lg font-semibold">Double-Breasted Coat</h4>
              <p className="text-gray-600">₹6,999</p>
            </div>
            </a>
            {/* Add more product cards or load dynamically */}
          </div>
          <div className="text-center mt-10">
            
            <a href="/Shop"  className="text-white bg-black px-6 py-3 hover:bg-gray-800 rounded-lg" >
            View Full Collection
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
