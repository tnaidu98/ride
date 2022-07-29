import React from "react";

import { Button } from "@mui/material";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const configButton = {
    variant: "contained",
    color: "primary",
  };

  return (
    <Button {...configButton} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
