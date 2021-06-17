import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Layout';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import { useAuthed } from './libs/hook';

const UnAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthed) {
          if (rest.path === '/signup') {
            alert('이미 회원가입이 되어있습니다.');
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
          } else if (rest.path === '/signin') {
            alert('이미 로그인이 되어있습니다.');
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <UnAuthedRoute path="/signup" component={SignUp} />
        <UnAuthedRoute path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;