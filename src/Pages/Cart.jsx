import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const Cart = () => {
  const { cart , total } = useCart();
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
                <div>$ {item.price * item.quantity}</div>
                <div className="cartBtns">
                  <button
                    className="btn primary"
                    onClick={() => incHandler(item)}>
                    Add
                  </button>
                  <div>{item.quantity}</div>
                  <button className="btn" onClick={() => decHandler(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>
          <section className="cartSummery">
            <h2>Cart summery</h2>
            <div>Total Price is : {total} $</div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Cart;
