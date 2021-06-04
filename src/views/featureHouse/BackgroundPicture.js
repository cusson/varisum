import { CardMedia } from "@material-ui/core";
import React from "react";

const BackgroundPicture = () => {
  return (
    <>
      <CardMedia
        image="/banner.jpg"
        style={{ height: "300px", width: "1200px" }}
      />
    </>
  );
};

export default BackgroundPicture;
