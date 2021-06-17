import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import { Route, Redirect } from 'react-router-dom';

import { useAuthed } from '../libs/hook';
import Cookies from 'js-cookie';

import Main from './Main';
import User from './User';

function LoginMenu({ props }) {
  const [isAuthed, setIsAuthed] = useState(useAuthed());

  const logOut = () => {
    Cookies.remove('session');
    alert('정상적으로 로그아웃 되었습니다.');
    props.history.push('/');
    setIsAuthed(false);
  };

  if (isAuthed) {
    return (
      <Button color="inherit" onClick={logOut}>Logout</Button>
    );
  }
  return (
    <Link color="inherit" href="/signin">
      <Button color="inherit">Login</Button>
    </Link>
  );
}

const AuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route exact
      render={props => {
        if (isAuthed) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link color="inherit" href="/"><PhotoCamera /></Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="/">Album layout</Link>
          </Typography>
          <LoginMenu props={props} />
        </Toolbar>
      </AppBar>
      <main>
        <Route path="/" exact component={Main} />
        <AuthedRoute path="/user" component={User} />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}