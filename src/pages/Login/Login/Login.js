import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import googleLogo from '../../../images/google logo.png';
import logo from '../../../images/logo.png';
import loginImg from '../../../images/signin-image.jpg';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('hello')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={1} sx={{ boxShadow: 3, mt: 8 }}>
                <Grid sx={{mb:4, mt:2}} item xs={12} md={6}>
                    <img style={{ width: "200px" }} src={logo} alt="" />
                    <Typography style={{fontWeight:'bolder', fontSize:'30px', color:'#2C5BAA'}} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-size-small"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            size="small" />
                        <Button variant="contained" sx={{ width: "75%", m: 1 }} type="submit">Login</Button> <br />
                        <Button sx={{ my: 2 }} variant="text">------------------------------- OR -------------------------------</Button> <br />
                        <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1 }} variant="outlined"><img src={googleLogo} alt="" style={{ width: '25px' }} />  Sign In With Google</Button> <br />
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>



                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img src={loginImg} alt="" /> <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/register'><Button sx={{ my: 2 }} variant="text">New User? Please Register</Button></NavLink>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Login;