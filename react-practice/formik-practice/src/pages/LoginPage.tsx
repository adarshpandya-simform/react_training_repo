import { FC } from "react";
import { motion } from "framer-motion";
import { Button, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {
  loginInitialValues,
  loginValidationSchema,
} from "../utils/validations";

const LoginPage: FC = () => {
  const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
    useFormik({
      initialValues: loginInitialValues,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
      validationSchema: loginValidationSchema,
    });

  return (
    <motion.div layout>
      <Paper elevation={0} sx={{ maxWidth: "500px", width: "500px" }}>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            value={values.email}
            label={"Email"}
            type={"email"}
            size={"small"}
            name="email"
            fullWidth
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <br />
          <br />
          <TextField
            type={"password"}
            value={values.password}
            size={"small"}
            label={"Password"}
            name="password"
            fullWidth
            onChange={handleChange}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <br />
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "loading..." : "login"}
          </Button>
        </form>
        <br />
        <Link to="/signup">go to signup</Link>
        <br />
      </Paper>
    </motion.div>
  );
};

export default LoginPage;
