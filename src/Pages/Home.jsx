import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import * as data from "../Services/data";
import { checkInCart } from "../utils/checkInCart";
import {toast } from "react-toastify";

const Home = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    toast.success(`" ${product.name} " added To Cart`)
    dispatch({ type: "ADD_TO_CART", payload: product });
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
                <button
                  onClick={() => addProductHandler(item)}
                  className="btn primary">
                  {checkInCart(cart, item) ? "In Cart" : "Add to Cart"}
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
