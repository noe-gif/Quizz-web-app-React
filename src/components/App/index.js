import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../../App.css';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword';
import { IconContext } from 'react-icons';

function App() {
  return (
    <Router>
      <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Menu} ></Route>
          <Route path="/welcome" component={Welcome} ></Route>
          <Route path="/login" component={Login} ></Route>
          <Route path="/signup" component={Signup} ></Route>
          <Route path="/ForgetPassword" component={ForgetPassword} ></Route>
          <Route component={ErrorPage} ></Route>
        </Switch>

        <Footer></Footer>
      </IconContext.Provider>
    </Router>
  );
}

export default App;