import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    input: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid white'
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },
  }));

const SingIn = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography color='secondary' component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} Validate>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    color="secondary"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    className={classes.input}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    color="secondary"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link color='secondary' variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link color='secondary' variant="body2">
                        <NavLink className={classes.link} to='/Register'>
                            Нет Аккаунта? Зарегистрируйся
                        </NavLink>
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
    )
}

export default SingIn
