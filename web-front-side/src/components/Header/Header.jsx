import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
      textDecoration: 'none'
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar color='transparent' position="static">
                <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography color="secondary" variant="h6" className={classes.title}>
                    EIGHT
                </Typography>
                    <NavLink className={classes.menuButton} to="/SingIn"><Button color='secondary'>Sing In</Button></NavLink>
                    <NavLink className={classes.menuButton} to="/Register"><Button color='secondary'>Sing Up</Button></NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
