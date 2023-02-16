import * as Yup from "yup";
const SignInSchema = () => {
  return Yup.object({
    email: Yup.string().min(10).max(25).email().required("Enter your email"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .min(8)
      .max(15)
      .required("Enter your password"),
  });
};

export default SignInSchema;
