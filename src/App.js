import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/Login';

// Redirect to Login if not authenticated
function onAuthRequired({ history }) {
  history.push('/login');
}

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Security
        issuer='https://dev-528054.okta.com/oauth2/default'
        client_id='0oa25b8g4nQXcCezB357'
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
      >
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Route path='/' exact={true} component={Home} />
            <SecureRoute path='/staff' exact={true} component={Staff} />
            <Route
              path='/login'
              render={() => <Login baseUrl='https://dev-528054.okta.com' />}
            />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
};

export default App;
