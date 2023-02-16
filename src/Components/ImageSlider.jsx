import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

import banner5 from "../Assets/Images/1.jpg";
import banner6 from "../Assets/Images/2.jpg";
import banner7 from "../Assets/Images/3.jpg";
import banner8 from "../Assets/Images/4.jpg";
import banner9 from "../Assets/Images/5.jpg";

const imagesUrlArray = [
  { url: banner5 },
  { url: banner6 },
  { url: banner7 },
  { url: banner8 },
];

const ImageSlider = () => {
  const [imageSlider, setImageSlider] = useState(0);

  const handleSlideImage = (props) => {
    setImageSlider(props);
  };

  useEffect(() => {
    setInterval(() => {
      const imageIndex =
        imageSlider > imageSlider.length - 1 ? 0 : imageSlider + 1;
      setImageSlider(imageIndex);
    }, 2000);
  }, []);
  return (
    <Box height={"100%"}>
      <Box height={"100%"}>
        <img
          width={"100%"}
          height="100%"
          src={imagesUrlArray[imageSlider].url}
        />
        <Box position={"absolute"} mt="-50px" ml="45%">
          <Radio
            checked={imageSlider === 0}
            value={0}
            sx={{
              color: "#2a8a8f",
              "&.Mui-checked": {
                color: "#2a8a8f",
              },
            }}
            onClick={() => handleSlideImage(0)}
          />
          <Radio
            checked={imageSlider === 1}
            value={1}
            sx={{
              color: "#2a8a8f",
              "&.Mui-checked": {
                color: "#2a8a8f",
              },
            }}
            onClick={() => handleSlideImage(1)}
          />
          <Radio
            checked={imageSlider === 2}
            value={2}
            onClick={() => handleSlideImage(2)}
            sx={{
              color: "#2a8a8f",
              "&.Mui-checked": {
                color: "#2a8a8f",
              },
            }}
          />
          <Radio
            checked={imageSlider === 3}
            value={3}
            onClick={() => handleSlideImage(3)}
            sx={{
              color: "#2a8a8f",
              "&.Mui-checked": {
                color: "#2a8a8f",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
