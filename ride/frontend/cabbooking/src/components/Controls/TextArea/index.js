import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextAreaWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField
      {...configTextfield}
      style={{ textAlign: "left" }}
      hintText='Message Field'
      floatingLabelText='MultiLine and FloatingLabel'
      multiline
    />
  );
};

export default TextAreaWrapper;
