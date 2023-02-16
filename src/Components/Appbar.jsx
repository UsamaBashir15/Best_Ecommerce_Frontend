import { Badge, Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../Assets/Images/logo.png";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
const Appbar = () => {
  const [openDrawer, setOpenDrawr] = useState(false);
  const navigator = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth_Data");
    navigator("/");
  };
  const handleDrawerChange = () => {
    setOpenDrawr(!openDrawer);
  };
  return (
    <Box height={"8vh"} bgcolor="#48c1a6" display={"flex"} pl="1%">
      <IconButton
        onClick={handleDrawerChange}
        disableRipple
        sx={{ mr: "1%" }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <CustomDrawer
        openDrawer={openDrawer}
        handleDrawerClose={handleDrawerChange}
        handleLogOut={handleLogOut}
      />
      <img src={logo} />
      <Box
        ml={"45%"}
        width={"35%"}
        height="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography
          variant="p"
          fontWeight={500}
          color="#e2e2e2"
          sx={{ cursor: "pointer" }}
        >
          HOME
        </Typography>
        <Typography
          variant="p"
          fontWeight={700}
          color="#e2e2e2"
          sx={{ cursor: "pointer" }}
        >
          SHOP
        </Typography>
        <Typography
          variant="p"
          fontWeight={700}
          color="#e2e2e2"
          sx={{ cursor: "pointer" }}
        >
          LOGOUT
        </Typography>
        <Typography
          variant="p"
          fontWeight={700}
          color="#e2e2e2"
          sx={{ cursor: "pointer" }}
        >
          PAGES
        </Typography>
        <Typography
          variant="p"
          fontWeight={700}
          color="#e2e2e2"
          sx={{ cursor: "pointer" }}
        >
          CONTACT
        </Typography>
      </Box>
      <IconButton disableRipple sx={{ ml: "5%" }}>
        <Link to={"/cartpage"} style={{ textDecoration: "none" }}>
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "#227f87",
              },
            }}
          >
            <ShoppingCartCheckoutIcon />
          </Badge>
        </Link>
      </IconButton>
    </Box>
  );
};

export default Appbar;

const CustomDrawer = ({ openDrawer, handleDrawerClose, handleLogOut }) => {
  return (
    <Drawer
      sx={{
        // width: "15vw",
        // flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20vw",
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={openDrawer}
      onClose={handleDrawerClose}
    >
      <Box width={"100%"} display="flex" justifyContent={"end"}>
        <KeyboardArrowLeftRoundedIcon
          onClick={handleDrawerClose}
          fontSize="large"
          sx={{ mr: "5%" }}
        />
      </Box>
      <Box
        width={"100%"}
        height="30%"
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          bgcolor={"#31a389"}
          width={"50%"}
          height="15%"
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          color="white"
          borderRadius={5}
          onClick={handleLogOut}
        >
          <Typography sx={{ mr: "5px", cursor: "pointer" }}>Log out</Typography>
          <LogoutRoundedIcon />
        </Box>
      </Box>
    </Drawer>
  );
};
