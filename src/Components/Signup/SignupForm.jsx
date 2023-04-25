import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../../common/input.css";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { signupUser } from "../../Services/signupService";
import { toast } from "react-toastify";
import { useAuthActions } from "../../Providers/AuthProvider";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(5, "Must be more than 5 char"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "must be more than 8 char")
    .matches(
      /^.*[!@#$%^&*()_+\-={};':"|,.<>?].*$/,
      "Need one special character"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const SignupForm = ({ history }) => {
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      if (!error) {
        toast.success(`Wellcome " ${userData.name} " ❤️`, { theme: "colored" });
      }
      setError(null);
      history.push("/cart");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(`${error.response.data.message}`);
      }
    }
  };


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="formControl">
      <form onSubmit={formik.handleSubmit}>
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input
          label="Phone Number"
          name="phoneNumber"
          formik={formik}
          type="tel"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
        <Input
          label="Password Confirmation"
          name="passwordConfirm"
          type="password"
          formik={formik}
        />
        <button
          type="submit"
          style={{ width: "100%" }}
          className={!formik.isValid ? "disabled btn" : "btn primary"}
          disabled={!formik.isValid}>
          Signup
        </button>
        <Link to="/login">
          <p className="account">I have Account</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
