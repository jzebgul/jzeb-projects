import React, { Component } from 'react';
import { Card, CardBody, Button} from 'reactstrap';
import firebase from '../services/fire';
import Login from './Login';
import { Route } from 'react-router-dom';
import {startLogout, startLogin} from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import Home from './Home';


const Header = () => {
  
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
}
  
  
  return (
 
     <div>
        <Card className="my-1 bg-warning">
          <CardBody>
          <h1 className="text-center my-2 ">Online Web Courses App</h1>
          
          <Button onClick={logout} color="danger">Logout</Button>
          </CardBody>
        </Card>
      </div>
   
   
  );
}
export default Header;