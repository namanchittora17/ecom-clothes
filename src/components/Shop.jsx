import Footer from "./Footer";
import Header from "./Header";

const Shop = () => {
  return (
    <>
    < Header />
      <div>
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .product-card {\n        transition: transform 0.3s ease, box-shadow 0.3s ease;\n      }\n      .product-card:hover {\n        transform: translateY(-4px);\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n      }\n    ",
            }}
          />
          <section className="px-8 py-16">
            <h2 className="text-4xl font-bold text-center mb-10">
              Shop the Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Product 1 */}
              <a
                href="/tweed-blazer"
                className="border rounded-lg p-4 text-center product-card block">
                <img
                  className="rounded-lg"
                  src="https://image.hm.com/assets/hm/39/0b/390bee10c8153d8560a0c4b38f03106845f93709.jpg?imwidth=1260"
                  alt="Tweed Blazer"
                />
                <h4 className="text-lg font-semibold">Tweed Blazer</h4>
                <p className="text-gray-600">₹4,999</p>
              </a>
              {/* Product 2 */}
              <a
                href="/ivory-shirt"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://image.hm.com/assets/hm/9f/3e/9f3e5b6840b1a7809717e2012e1ce3933204a52a.jpg?imwidth=1260"
                  alt="Ivory Oxford Shirt"
                />
                <h4 className="text-lg font-semibold">Ivory Oxford Shirt</h4>
                <p className="text-gray-600">₹2,499</p>
              </a>
              {/* Product 3 */}
              <a
                href="/cream-chinos"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://image.hm.com/assets/hm/79/6c/796cdecdc61d791a0aad0a52ad401cc0798be506.jpg?imwidth=1260"
                  alt="Cream Chinos"
                />
                <h4 className="text-lg font-semibold">Cream Chinos</h4>
                <p className="text-gray-600">₹2,799</p>
              </a>
              {/* Product 4 */}
              <a
                href="/breasted-coat"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://image.hm.com/assets/hm/25/41/2541605008b96e486c16af0710da1d1af5a97b09.jpg?imwidth=1260"
                  alt="Double-Breasted Coat"
                />
                <h4 className="text-lg font-semibold">Double-Breasted Coat</h4>
                <p className="text-gray-600">₹6,999</p>
              </a>
              {/* Product 5 */}
              <a
                href="/silk-tie"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://image.hm.com/assets/hm/98/22/98229fb844ba795513d06369c1fd34477301bdab.jpg?imwidth=1260"
                  alt="Silk Tie"
                />
                <h4 className="text-lg font-semibold">Silk Tie</h4>
                <p className="text-gray-600">₹899</p>
              </a>
              {/* Product 6 */}
              <a
                href="/casio-watch"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://assets.ajio.com/medias/sys_master/root/20250129/3BDs/679a1636bc78b543a906dc9a/-473Wx593H-469699734-green-MODEL.jpg?imwidth=1260"
                  alt="CASIO
Men Water-Resistant Analogue Watch-AQ-230A-3AMQYDF"
                />
                <h4 className="text-lg font-semibold">
                  CASIO Men Water-Resistant Analogue Watch-AQ-230A-3AMQYDF
                </h4>
                <p className="text-gray-600">₹5,295</p>
              </a>
              {/* Product 7 */}
              <a
                href="/bag"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://www.prada.com/content/dam/pradabkg_products/2/2VC/2VC018/9Z2F0002/2VC018_9Z2_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
                  alt="Parada - Saffiano Leather Travel Bag"
                />
                <h4 className="text-lg font-semibold">
                  Parada - Saffiano Leather Travel Bag
                </h4>
                <p className="text-gray-600">₹16,500</p>
              </a>
              {/* Product 8 */}
              <a
                href="/birkenstock-arizona"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  className="rounded-lg"
                  src="https://www.birkenstock.in/cdn/shop/products/51793_8e6aa142-8e6b-45e5-838a-e02558667881.jpg?v=1685373500&width=2000"
                  alt="BIRKENSTOCK-Arizona Birko-Flor"
                />
                <h4 className="text-lg font-semibold">
                  BIRKENSTOCK-Arizona Birko-Flor
                </h4>
                <p className="text-gray-600">₹6,990</p>
              </a>
              {/* Product 9 */}
              <a
                href="/poplin-shirt"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  src="https://image.hm.com/assets/hm/7b/d3/7bd38df2c3ad73bf694bf57bd1adaa71678efd03.jpg?imwidth=1260"
                  alt="Poplin shirt"
                  className="mb-2 mx-auto"
                />
                <h4 className="text-lg font-semibold">Poplin shirt</h4>
                <p className="text-gray-600">₹2,699</p>
              </a>
              {/* Product 10 */}
              <a
                href="/cropped-trousers"
                className="border rounded-lg p-4 text-center product-card block"
              >
                <img
                  src="https://image.hm.com/assets/hm/70/10/7010dd67dd0e9c97ac6489437eee257c5c418106.jpg?imwidth=1260"
                  alt="Slim Fit Cropped trousers"
                  className="mb-2 mx-auto"
                />
                <h4 className="text-lg font-semibold">
                  Slim Fit Cropped trousers
                </h4>
                <p className="text-gray-600">₹4,799</p>
              </a>
            </div>
          </section>
        </div>
      </div>
      < Footer />
    </>
  );
};
export default Shop;