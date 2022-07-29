import { margin } from "@mui/system";
import driverlogo from "../../images/Driver.png"
import { Formik, Form } from "formik";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import Controls from "../Controls"
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function Driver() {

    const navigate = useNavigate();

    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be atleast 8 charaters')
            .required('Password is required')
    });

    return (
        <div className="Driver">
            <img src={driverlogo} />
            <h1>Driver Login/Register Page</h1>

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                <Form>
                    <Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    Login
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    <Controls.TextField name='email' label='Email' />
                                    <Controls.TextField name='password' type='password' label='Password' />
                                </Typography>
                            </CardContent>
                        <CardActions >
                            <Controls.Button color='warning' style={{ margin: "auto" }}>Cancel</Controls.Button>
                            <Controls.Button type='submit' style={{ margin: "auto" }} onClick={() => { navigate('/driverHomePage') }}>Login</Controls.Button>
                        </CardActions>
                    </Card>
                    <Controls.Button style={{ margin: "auto", marginTop: "20px" }} onClick={() => { navigate('/registerDriver') }} >
                        New User? Register Here
                    </Controls.Button>
                </Form>
            </Formik>

        </div>
    );
}

export default Driver;