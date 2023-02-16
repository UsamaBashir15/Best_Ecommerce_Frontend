import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import SignInSchema from "../Schemas/SignInSchema";
import { postSignInApi } from "../server/SignInApi";
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
  email: "",
  password: "",
};
const SignIn = () => {
  const classes = useStyles();
  const navigator = useNavigate();
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
    validationSchema: SignInSchema,
    onSubmit: async (values, action) => {
      const res = await postSignInApi(values);
      if (res.get === "OK") {
        action.resetForm();
        navigator("/dashboard");
      } else {
        res.error.response.status === 400
          ? setErrors({ email: res.error.response.data })
          : setErrors({ password: res.error.response.data });
      }
    },
  });

  return (
    <Box height={"40%"} width="50%">
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
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError error={errors.email} touched={touched.email} />
          }
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
        />
        <TextField
          value={values.password}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            <HelpingError error={errors.password} touched={touched.password} />
          }
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
        />

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography
            variant="p"
            fontWeight={700}
            color="#369d86"
            sx={{ cursor: "pointer" }}
          >
            Forgot your password?
          </Typography>

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "25%",
              borderRadius: 10,
              textTransform: "capitalize",

              bgcolor: "#48c1a6",
              ":hover": {
                bgcolor: "#31a389",
              },
            }}
          >
            {" "}
            <Typography variant="p" fontWeight={700}>
              Login
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;

const HelpingError = (props) => {
  // console.warn("Bro", props.touched.email);
  return props.touched && props.error ? (
    <Typography variant="caption" color={"red"}>
      {props.error}
    </Typography>
  ) : null;
};
