import React from "react";
import * as Yup from "yup";

const SignUpSchema = () => {
  return Yup.object({
    name: Yup.string().min(3).max(25).required("Enter your name"),
    email: Yup.string().min(10).max(25).email().required("Enter your email"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .min(8)
      .max(15)
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password not matched")
      .required("enter your confirmPassword"),
  });
};

export default SignUpSchema;
