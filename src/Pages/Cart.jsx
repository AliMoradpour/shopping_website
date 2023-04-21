import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";

const Cart = () => {
  const {cart} = useCart();
  return (
    <Layout>
      <main>{cart.length ? cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )) : <p>No Item in Cart</p>}</main>
    </Layout>
  );
};

export default Cart;
