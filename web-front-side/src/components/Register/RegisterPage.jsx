import React, {useReducer, useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import {services} from '../../services/userService'

const useStyles = makeStyles((theme) => ({
    input: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid white'
    },
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },
  }));

const RegisterPage = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        hash: '',
        password: ''
    })
    const handleCange = (e) => {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        services.register(user)
    }
    const classes = useStyles();
    return (
        <div className={classes.register}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography color="secondary" component="h1" variant="h5">
                    Sign up
                    </Typography>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleCange}
                            className={classes.input}
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            color="secondary"
                            id="firstName"
                            label="??????"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleCange}
                            className={classes.input}
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            color="secondary"
                            label="??????????????"
                            name="lastName"
                            autoComplete="lname"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            onChange={handleCange}
                            className={classes.input}
                            variant="outlined"
                            required
                            fullWidth
                            color="secondary"
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            onChange={handleCange}
                            className={classes.input}
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="????????????"
                            type="password"
                            color="secondary"
                            id="password"
                            autoComplete="current-password"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            onChange={handleCange}
                            className={classes.input}
                            variant="outlined"
                            required
                            fullWidth
                            name="hash"
                            label="Hash ????????"
                            type="text"
                            color="secondary"
                            id="hash"
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <NavLink className={classes.link} to='/SingIn'>
                            Already have an account? Sign in
                        </NavLink>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default RegisterPage
