import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import logo from '../../../images/vangari-logo2.png';


const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle();
    const { user, logout } = useAuth();

    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img style={{ width: "60px" }} src={logo} alt="" />
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to='/'><Button color="inherit">Home</Button></Link>
                            <Link className={navItem} to='/services'><Button color="inherit">Services</Button></Link>
                            {
                                user?.email ?
                                    <>
                                        <Button style={{ color: 'black' }}>{user?.displayName}</Button>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </>
                                    :
                                    <NavLink style={{ textDecoration: "none", color: 'white' }} to='/login'><Button color="inherit">Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/services">Services</Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;