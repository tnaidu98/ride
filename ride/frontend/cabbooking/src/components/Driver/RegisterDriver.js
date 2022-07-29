import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Controls from '../Controls';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

function RegisterDriver() {

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    mobileNo: Yup.string()
      .test('len', 'Must be exactly 10 numbers', val => val.length === 10)
      .required('Mobile No is required'),
    password: Yup.string()
      .min(8, 'Password must be atleast 8 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    vehicleNo: Yup.string()
      .min(10, 'Vehicle No must be atleast 10 characters')
      .required('Vehicle No is required')
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: '',
        vehicleNo: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1>Driver Register Form</h1>
          <Form>
            <Card sx={{ maxWidth: 500, margin: "auto" }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Register now
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    <Controls.TextField label="First Name" name="firstName" type="text" />
                    <Controls.TextField label="Last Name" name="lastName" type="text" />
                    <Controls.TextField label="Email" name="email" type="email" />
                    <Controls.TextField label="Mobile No" name="mobileNo" type="email" />
                    <Controls.TextField label="Password" name="password" type="password" />
                    <Controls.TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <Controls.TextField label="Vehicle No" name="vehicleNo" type="text" />
                  </Typography>
                </CardContent>
              <CardActions >
                <Controls.Button type="reset" color='warning' style={{ margin: "auto" }}>Reset</Controls.Button>
                <Controls.Button type="submit" style={{ margin: "auto" }}>Register</Controls.Button>
              </CardActions>
            </Card>

          </Form>
        </div>
      )}
    </Formik>
  );
}

export default RegisterDriver;