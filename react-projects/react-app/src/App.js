import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { Container, Col, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null,
  //     isLogin: false,

  //   }
  // }
  
  //  componentDidMount() {
  //   this.authListner();
  // }
  
  //  authListner() {
  //    firebase.auth().onAuthStateChanged((user) => {
  //      if (user) {
  //       this.setState({ user});

  //      } else {
  //        this.setSate({ user: null });
  //      }
  //    })
  //    firebase.auth().onAuthStateChanged(function (user) {
  //      if (user) {
  //        console.log(user);
  //        this.setSate = {
  //          isLogin: true,

  //        }
  //        console.log(user.displayName);
  //      } else {
  //      // No user is signed in.
  //      }
  //    });
  //  }
  render() {
    
    return (
      <div>
        
          <Router>
            <ToastContainer />
            <Container>
              <Header />
              <Row>
                <Col md={4}>
                  <Menu />
                </Col>
                <Col md={8}>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/add-courses" component={AddCourse} exact />
                  <Route path="/view-courses" component={AllCourses} exact />
                </Col>
              </Row>
            </Container>
          </Router>
      </div>

    );
  }
}

export default App;

