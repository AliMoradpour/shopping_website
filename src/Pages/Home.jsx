import Layout from "../Layout/Layout";
import * as data from "../Services/data";

const Home = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((item) => (
            <div key={item.id} className="product">
              <div className="productImg">
                <img src={item.image} alt={`Image of ${item.name}`} />
              </div>
              <div className="productInfo">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => addProductHandler(product)} className="btn primary">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
