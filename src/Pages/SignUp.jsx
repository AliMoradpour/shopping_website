import SignupForm from "../Components/Signup";
import Layout from "../Layout/Layout";

const SignUp = () => {
  return (
    <Layout>
      <main className="container">
        <SignupForm />
      </main>
    </Layout>
  );
};

export default SignUp;