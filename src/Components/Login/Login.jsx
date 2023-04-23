import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../../common/input.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "must be more than 8 char")
    .matches(
      /^.*[!@#$%^&*()_+\-={};':"|,.<>?].*$/,
      "Need one special character"
    ),
});

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};
const LoginForm = () => {
  const [formValues, setFormValues] = useState(null);

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="formControl">
      <form onSubmit={formik.handleSubmit}>
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
        <button
          type="submit"
          style={{ width: "100%" }}
          className={!formik.isValid ? "disabled btn" : "btn primary"}
          disabled={!formik.isValid}>
          Login
        </button>
        <Link to="/signup">
          <p className="account">Create Account</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
