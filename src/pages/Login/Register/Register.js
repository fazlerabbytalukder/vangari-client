import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import googleLogo from '../../../images/google logo.png';
import logo from '../../../images/logo.png';
import regImg from '../../../images/signup-image.jpg';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, SetLoginData] = useState({})

    const history = useHistory();
    const location = useLocation();

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        // console.log(newLoginData);
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your pass did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        // alert('hello')
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
                                Register
                            </Typography>
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    name="name"
                                    type="text"
                                    onChange={handleOnChange}
                                    label="Your name"
                                    id="outlined-size-small"
                                    size="small"
                                />
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
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-size-small"
                                    label="Re-Type Your Password"
                                    name="password2"
                                    onChange={handleOnChange}
                                    type="password"
                                    size="small" />
                                <Button variant="contained" sx={{ width: "75%", m: 1 }} type="submit">Register</Button> <br />
                                <Button sx={{ my: 2 }} variant="text">--------------------- OR ---------------------</Button> <br />
                                <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1 }} variant="outlined"><img src={googleLogo} alt="" style={{ width: '25px' }} />  Sign In With Google</Button> <br />
                            </form>}
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>


                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{width:'400px'}} src={regImg} alt="" /> <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/login'><Button sx={{ my: 2 }} variant="text">Already User? Please Login</Button></NavLink>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;