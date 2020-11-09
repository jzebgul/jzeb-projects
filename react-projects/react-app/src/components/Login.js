// import React, { Component, useReducer } from 'react';
// import firebase from '../services/fire';
// import { Button, Jumbotron } from 'reactstrap';

// class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isLogin: false,
//             name: ""
//         }
//     }
//     onSubmit = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(function (result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ...
//         })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(function (user) {
//             if (user) {
//                 console.log("User signed in ");
//                 console.log(user);

//             } else {
//                 console.log(" NO User signed in ")
//             }
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <Jumbotron className="text-center bg-primary ">
//                 <h2>Wellcome to Online-Web-Courses</h2>
//                 <Button onClick={this.onSubmit} color="warning" size="lg">GoogleLogin</Button>
//                 </Jumbotron>
                
//             </div>
//         )
//     }

// }
// export default Login;
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Button, Jumbotron } from 'reactstrap';

export const Login = ({ startLogin }) => (
    <div>
                <Jumbotron className="text-center">
                 <h2>Wellcome to Online-Web-Courses</h2>
                 <Button onClick={startLogin} color="warning" size="lg">GoogleLogin</Button>
                 </Jumbotron>
                
          </div>
);

const mapDispathToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispathToProps)(Login)