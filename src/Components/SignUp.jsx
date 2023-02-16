import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import SignUpSchema from "../Schemas/SignUpSchema";
import { postRegisterApi } from "../server/RegisterApi";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    background: "white",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderRadius: 20,
        boxShadow: "0px 5px 5px 5px #e6f8f6",
      },
    },
  },
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigator = useNavigate();
  const classes = useStyles();
  const {
    errors,
    values,
    handleSubmit,
    handleChange,
    touched,
    handleBlur,
    setErrors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: async (values, action) => {
      const res = await postRegisterApi(values);
      if (res.get === "OK") {
        action.resetForm();
        navigator("/dashboard");
      } else {
        setErrors({ email: res.error.response.data });
      }
    },
  });
  const handleForm = (props) => {
    console.log("TextFieldData:", props);
  };

  return (
    <Box height={"60%"} width="50%">
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <TextField
          placeholder="Full Name"
          className={classes.root}
          size="small"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError error={errors.name} touched={touched.name} />
          }
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon sx={{ color: "#31a389" }} />
              </InputAdornment>
            ),
          }}
          placeholder="Email or phone number"
          className={classes.root}
          size="small"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError error={errors.email} touched={touched.email} />
          }
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EnhancedEncryptionIcon sx={{ color: "#31a389" }} />
              </InputAdornment>
            ),
          }}
          placeholder="Password"
          className={classes.root}
          size="small"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError error={errors.password} touched={touched.password} />
          }
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EnhancedEncryptionIcon sx={{ color: "#31a389" }} />
              </InputAdornment>
            ),
          }}
          placeholder="Confirm password"
          className={classes.root}
          size="small"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          }
        />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "150px",
              borderRadius: 10,
              textTransform: "capitalize",

              bgcolor: "#48c1a6",
              ":hover": {
                bgcolor: "#31a389",
              },
            }}
          >
            <Typography variant="p" fontWeight={700}>
              Sign Up
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;

const HelpingError = (props) => {
  console.log("hh", props.touched);
  return props.touched && props.error ? (
    <Typography variant="caption" color={"red"}>
      {props.error}
    </Typography>
  ) : null;
};
