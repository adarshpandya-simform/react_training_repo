import * as Yup from "yup";

export const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .lowercase()
      .required("Email is required!"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required"),
  });
};

export const SignupValidationSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .lowercase()
      .max(12)
      .required("First Name is required"),
    lastName: Yup.string()
      .trim()
      .lowercase()
      .max(12)
      .required("Last Name is required"),
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required"),
  });
};

export const loginInitialValues = { email: "", password: "" };

export const signupInitialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
