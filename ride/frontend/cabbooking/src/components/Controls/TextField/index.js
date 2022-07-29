import React from "react";
import { TextField } from "@mui/material";
import { ErrorMessage, Field, useField } from "formik";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  errorText: {
    color: "#f44336",
    paddingLeft: "10px",
    fontSize: "12px",
    marginTop: "2px",
  },
});

const TextFieldWrapper = (props) => {
  const { name, label, ...otherProps } = props;
  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <>
      <Field as={TextField} label={label} name={name} {...configTextfield} />
      <ErrorMessage name={name}>
        {(msg) => <p className={classes.errorText}>{msg}</p>}
      </ErrorMessage>
    </>
  );
};

export default TextFieldWrapper;
