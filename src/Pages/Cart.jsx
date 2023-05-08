import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./css/cartPage.css";

const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  if (!cart.length) {
    return (
      <Layout>
        <main className="container">
          <h2>Cart is Empty !</h2>
        </main>
      </Layout>
    );
  }

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };
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
                <div>$ {item.offPrice * item.quantity}</div>
                <div className="cartBtns">
                  <button onClick={() => incHandler(item)}>+</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => decHandler(item)}>-</button>
                </div>
              </div>
            ))}
          </section>
          <section className="cartSummery">
            <CartSummery cart={cart} total={total} />
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Cart;

const CartSummery = ({ cart, total }) => {
  const originalTotalPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;

  return (
    <section className="summerySection">
      <h2 style={{ marginBottom: "30px" }}>Cart summery</h2>
      <div className="summeryItem">
        <p>Original Total Price</p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div className="summeryItem">
        <p>Cart Discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <hr />
      <div className="summeryItem">
        <p>Net Price</p>
        <p>{total} $</p>
      </div>
      <Link to="/signup?redirect=checkout">
        <button
          className="btn primary"
          style={{ width: "100%", marginTop: "20px" }}>
          Go To Checkout
        </button>
      </Link>
    </section>
  );
};

