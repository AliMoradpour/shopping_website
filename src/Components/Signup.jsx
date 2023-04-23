import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import "../common/input.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(5, "Must be more than 5 char"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  number: Yup.string()
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
  number: "",
  password: "",
  passwordConfirm: "",
};

const onSubmit = (values) => {
  console.log(values);
};
const SignupForm = () => {
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
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input label="Phone Number" name="number" formik={formik} type="tel" />
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
