import { Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import EmptyCart2 from "../Assets/Images/EmptyCart.png";
import { currentAuth } from "../auth/Current_Auth";
import { getCartProductApi } from "../server/CartProductApi";

const CartProductPage = () => {
  const [cartValue, setcartValue] = useState([]);

  const getCartProduct = async () => {
    const userId = currentAuth();
    try {
      const res = await getCartProductApi(userId);

      setcartValue(res.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    getCartProduct();
  }, []);

  const handleFieldValue = async (props) => {
    console.warn(props);

    if (props.quantity != "") {
      let totalPrice = props.price * props.quantity;
      try {
        const res = await axios.put(
          `http://localhost:5000/api/CartProduct/${props.id}`,
          {
            productQuantity: props.quantity,
            productSubTotal: totalPrice,
          }
        );
        getCartProduct();
        console.warn(res);
      } catch (error) {
        console.warn(error.message);
      }
    }
  };

  const deleteCartProduct = async (props) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/CartProduct/${props}`
      );

      getCartProduct();
    } catch (error) {
      console.warn(error.message);
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#6b8782",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "20vh",
        }}
      ></Box>

      <Box
        overflow={"scroll"}
        sx={{
          width: "100%",
          height: "80vh",
          background: "#6b8782",
        }}
      >
        <Typography variant="h4">Shopping cart</Typography>
        <Divider sx={{ background: "#e0e0e0", mt: 2, mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "70%",

              justifyContent: "space-evenly",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h5">Product</Typography>
            <Typography variant="h5">Price</Typography>
            <Typography variant="h5">Quantity</Typography>
            <Typography variant="h5">Subtotal</Typography>
          </Box>
        </Box>
        <Divider
          variant="fullWidth"
          sx={{ background: "#e0e0e0", mt: 2, mb: 2 }}
        />
        {cartValue.length != 0 ? (
          cartValue.map((value, index) => {
            return (
              <Fragment>
                <Box
                  sx={{
                    height: "15vh",

                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{ mr: "11vw" }}
                    onClick={() => deleteCartProduct(value._id)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                  <Box
                    sx={{
                      height: "14vh",
                      width: "8%",

                      backgroundImage: `url(${value.productImage})`,
                      backgroundSize: "cover",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "70%",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography variant="h6">{value.productName}</Typography>
                    <Typography variant="h6">{value.productPrice}</Typography>
                    <TextField
                      onChange={(e) => {
                        handleFieldValue({
                          price: value.productPrice,
                          quantity: e.target.value,
                          id: value._id,
                        });
                      }}
                      size="small"
                      sx={{ width: "7%" }}
                    />
                    <Typography variant="h6" sx={{ width: "5%" }}>
                      {value.productSubTotal}
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  variant="fullWidth"
                  sx={{ background: "#e0e0e0", mt: 2, mb: 2 }}
                />
              </Fragment>
            );
          })
        ) : (
          <Box
            sx={{
              height: "70vh",
              width: "100%",

              textAlign: "center",
            }}
          >
            <img height={"100%"} src={EmptyCart2} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartProductPage;
