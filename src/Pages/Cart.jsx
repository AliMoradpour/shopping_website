import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";
import "./cartPage.css";

const Cart = () => {
  const { cart } = useCart();

  if (!cart.length) {
    return (
      <Layout>
        <main>
          <h2>Cart is Empty !</h2>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => (
              <div key={item.id} className="cartItem">
                <div className="itemImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>$ {item.price * item.quantity}</div>
                <div className="cartBtns">
                  <button className="btn primary">Add</button>
                  <div>{item.quantity}</div>
                  <button className="btn">Remove</button>
                </div>
              </div>
            ))}
          </section>
          <section className="cartSummery">cart summery</section>
        </section>
      </main>
    </Layout>
  );
};

export default Cart;
