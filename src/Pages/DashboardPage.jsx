import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import ImageSlider from "../Components/ImageSlider";
import banner1 from "../Assets/Images/banner1.jpg";
import banner2 from "../Assets/Images/banner2.jpg";
import banner3 from "../Assets/Images/banner3.jpg";
import banner4 from "../Assets/Images/banner4.jpg";
import axios from "axios";
import { getProductApi } from "../server/ProductApi";
import { postCartProductApi } from "../server/CartProductApi";
import jwtDecode from "jwt-decode";
import { currentAuth } from "../auth/Current_Auth";

const imagesUrlArray = [
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
  { url: banner1 },
  { url: banner2 },
  { url: banner3 },
  { url: banner4 },
];

const DashboardPage = () => {
  const [product, setProduct] = useState([]);

  const handleCartPost = async (props) => {
    const userId = currentAuth();

    const cartPostObject = {
      productImage: props.productImage,
      productName: props.productName,
      productPrice: props.productPrice,
      productSubTotal: props.productPrice,
      productQuantity: 1,
      userId: userId,
    };
    const res = await postCartProductApi(cartPostObject);
  };

  const handleGetProduct = async () => {
    try {
      const res = await getProductApi();

      setProduct(res.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);
  return (
    <div>
      <Appbar />
      <CustomBanner />
      <Grid container rowSpacing={5} columnSpacing={5} p={"1%"}>
        {product.map((value, index) => {
          return <ProductCard value={value} handleCartPost={handleCartPost} />;
        })}
      </Grid>
    </div>
  );
};

export default DashboardPage;

const CustomBanner = () => {
  return (
    <Box height={"50vh"} bgcolor="teal">
      <ImageSlider />
    </Box>
  );
};

const ProductCard = ({ value, handleCartPost }) => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={4} xl={2}>
      <Card
        elevation={6}
        sx={{
          height: "40vh",
          borderRadius: 5,
          bgcolor: "#e9e8e8",
        }}
      >
        <img height={"50%"} width={"100%"} src={value.productImage} />
        <Box
          height={"50%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>{value.productName}</Typography>
          <Typography sx={{ fontWeight: 700 }}>{value.productPrice}</Typography>
          <Button
            onClick={() => handleCartPost(value)}
            variant="contained"
            sx={{
              width: "60%",

              borderRadius: 10,
              bgcolor: "#48c1a6",
              ":hover": {
                bgcolor: "#31a389",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
