import CartList from "../Components/CartList/CartList";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";

const Home = () => {

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          <CartList />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
