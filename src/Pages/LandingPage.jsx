import {
  Box,
  Button,
  Divider,
  IconButton,
  keyframes,
  Slide,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import landingPageImage from "../Assets/Images/landingpage.png";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const LandingPage = () => {
  const [showLoginCard, setShowLoginCard] = useState(true);

  const handleShowCards = () => {
    setShowLoginCard(!showLoginCard);
  };
  return (
    <Box height={"100vh"} display="flex">
      <FirstBox
        showLoginCard={showLoginCard}
        handleShowCards={handleShowCards}
      />
      <SeconedBox />
    </Box>
  );
};

export default LandingPage;

const FirstBox = (props) => {
  return (
    <Box
      height={"100%"}
      width="50%"
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
    >
      <Box
        mt={"25%"}
        height={"10%"}
        width="42%"
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <IconButton disableRipple onClick={props.handleShowCards}>
          <Typography
            variant="h4"
            fontWeight={700}
            color={props.showLoginCard === true ? "#2a8a8f" : "#e2e2e2"}
            textAlign={"left"}
          >
            Login
            <Divider
              sx={{
                width: "135px",
                height: "3px",
                bgcolor: props.showLoginCard === true ? "#2a8a8f" : "#e2e2e2",
                mb: "-10px",
                mt: "10px",
                ml: "-22px",
              }}
            ></Divider>
          </Typography>
        </IconButton>
        <IconButton disableRipple onClick={props.handleShowCards}>
          <Typography
            variant="h4"
            fontWeight={700}
            color={props.showLoginCard === false ? "#2a8a8f" : "#e2e2e2"}
            textAlign={"left"}
          >
            Sign Up
            <Divider
              sx={{
                width: "135px",
                height: "3px",
                bgcolor: props.showLoginCard === false ? "#2a8a8f" : "#e2e2e2",
                mb: "-10px",
                mt: "10px",
                mr: "-10px",
              }}
            ></Divider>
          </Typography>
        </IconButton>
      </Box>
      {props.showLoginCard === true ? <SignIn /> : <SignUp />}
    </Box>
  );
};

const SeconedBox = () => {
  return (
    <Box
      height={"100%"}
      width="50%"
      // sx={{ background: "linear-gradient(to right,  #9cded0,#7cd2c3)" }}
      display={"flex"}
      justifyContent="end"
      alignItems={"center"}
    >
      <Slide
        in={true}
        direction={"left"}
        timeout={1000}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "linear",
        }}
      >
        <Box
          position={"absolute"}
          height="100%"
          width={"50%"}
          bgcolor="#76d1c3"
          sx={{
            transition: "ease-in",
            transform: "translateX(2)",
            animationDirection: "normal",
            animationDuration: "3s",
            clipPath: "polygon(59% 0, 100% 0%, 100% 100%, 59% 100%, 0% 50%);",
          }}
        ></Box>
      </Slide>
      <Slide
        in={true}
        direction={"left"}
        timeout={3000}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "linear",
        }}
      >
        <Box
          position={"absolute"}
          height="100%"
          width={"40%"}
          bgcolor="#9cddd0"
          sx={{
            clipPath: "polygon(66% 0, 100% 0%, 100% 100%, 66% 100%, 0% 50%)",
          }}
        ></Box>
      </Slide>
      <Slide
        in={true}
        direction={"left"}
        timeout={3000}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "linear",
        }}
      >
        <Box
          position={"absolute"}
          height="100%"
          width={"30%"}
          bgcolor="#c7ede5"
          sx={{
            clipPath: "polygon(82% 0, 100% 0%, 100% 100%, 82% 100%, 0% 50%)",
          }}
        ></Box>
      </Slide>
      <Slide
        in={true}
        direction={"left"}
        timeout={3000}
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "linear",
        }}
      >
        <img
          style={{ height: "40%", position: "absolute", marginRight: "4%" }}
          src={landingPageImage}
        />
      </Slide>
    </Box>
  );
};
