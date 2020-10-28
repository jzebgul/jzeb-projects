import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddCourse from '../components/AddCourse';
import AllCourses from '../components/AllCourses';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import { Container, Col, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Menu from '../components/Menu';
import App from '../App';




export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/App" component={App} />
      <PrivateRoute path="/add-courses" component={AddCourse}  />
      <PrivateRoute path="/view-courses" component={AllCourses}  />
      <Route component={NotFoundPage} />
    </Switch>

  </Router>
);

export default AppRouter;
