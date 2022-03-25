import { FC, useState } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {
  signupInitialValues,
  SignupValidationSchema,
} from "../utils/validations";

const _interests = [
  "Mobile",
  "Tablet",
  "Electronics",
  "Toys",
  "Home Appliances",
  "Smart Wears",
];

const SignupPage: FC = () => {
  const [isFirstSectionCompleted, setIsFirstSectionCompleted] = useState(false);
  const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
    useFormik({
      initialValues: signupInitialValues,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        setIsFirstSectionCompleted(true);
      },
      validationSchema: SignupValidationSchema,
    });
  const [interests, setInterests] = useState<string[]>([]);
  const [profile, setUserProfile] = useState("");

  const handleProfile = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let target = e.target as HTMLInputElement;
    if (target) {
      setUserProfile(URL.createObjectURL(target.files![0]));
    }
  };

  const handleInterests = (interest: string) => {
    interests.includes(interest)
      ? setInterests((prevInts) => prevInts.filter((int) => int !== interest))
      : setInterests((prevInts) => [...prevInts, interest]);
  };

  return (
    <motion.div layout>
      <Paper elevation={0} sx={{ maxWidth: "600px", width: "600px" }}>
        <br />
        {isFirstSectionCompleted ? (
          <>
            <Typography variant="h6">
              Almost There! Tell us Little Bit More About Yourself
            </Typography>
            <br />
            <Box display={"flex"} alignItems={"center"}>
              <Avatar alt="user-profile" src={profile} />
              <Input
                sx={{ marginLeft: 1 }}
                fullWidth
                type="file"
                onChange={(e) => {
                  handleProfile(e);
                }}
              />
            </Box>
            <br />
            <Box>
              <Typography variant="h6">Select Interests</Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                {_interests.map((interest) => (
                  <Chip
                    label={interest}
                    key={interest}
                    variant={
                      interests.includes(interest) ? "filled" : "outlined"
                    }
                    color="primary"
                    onClick={() => {
                      handleInterests(interest);
                    }}
                  />
                ))}
              </Box>
            </Box>
            <br />
            <Button fullWidth variant="contained" color="primary">
              Complete Signup
            </Button>
            <br />
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              value={values.email}
              label={"Email"}
              type={"email"}
              size={"small"}
              fullWidth
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              name="email"
            />
            <br />
            <br />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <TextField
                value={values.firstName}
                label={"First Name"}
                type={"text"}
                size={"small"}
                fullWidth
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                name="firstName"
              />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <TextField
                value={values.lastName}
                label={"Last Name"}
                type={"text"}
                size={"small"}
                fullWidth
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                name="lastName"
              />
            </Box>
            <br />
            <TextField
              value={values.password}
              label={"Password"}
              type={"password"}
              size={"small"}
              fullWidth
              name="password"
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <br />
            <br />
            <Button
              disabled={isSubmitting}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              {isSubmitting ? "loading..." : "signup"}
            </Button>
          </form>
        )}
        <br />
        <Link to="/login">go to login</Link>
      </Paper>
    </motion.div>
  );
};

export default SignupPage;
