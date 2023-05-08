import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">Go To Shopping</Link>
      </main>
    );

  return (
    <main className="container">
      <section className="cartCenter">
        {auth ? (
          <>
            <section className="cartItemList">
              <h3>Checkout Details</h3>
              <p>Name : {auth.name}</p>
              <p>Email : {auth.email}</p>
              <p>Phone : {auth.phoneNumber}</p>
            </section>
            <section className="cartSummery">
              {cart &&
                cart.map((c) => (
                  <div>
                    {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                  </div>
                ))}
              <hr />
              <div>Total Price is : {total}</div>
            </section>
          </>
        ) : (
          <p>Please Login</p>
        )}
      </section>
    </main>
  );
};

export default Checkout;
