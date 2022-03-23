import { FC } from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { SignupPage, LoginPage } from ".";

export interface pageType {
  type: "login" | "signup";
}

const AuthPageRenderer: FC<pageType> = ({ type }) => {
  return (
    <motion.div layout transition={{ type: "spring", duration: 0.4 }}>
      <Paper elevation={7} sx={{ padding: 2 }}>
        {type === "login" ? <LoginPage /> : <SignupPage />}
      </Paper>
    </motion.div>
  );
};

export default AuthPageRenderer;
