import React from 'react';
import './Login.css';
import logo from '../images/banner.jpg';
import { Link, useHistory, useLocation } from "react-router-dom";

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // if(firebase.apps.length === 0){
    //     firebase.initializeApp(firebaseConfig);
    // }
    // const ClickForGoogleSignIn = () => {
    //     const googleProvider = new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(googleProvider).then(function(result) {
    //         const {displayName, email} = result.user;
    //         const signedInUser = {name: displayName, email }
    //         setLoggedInUser(signedInUser);
    //         history.replace(from);

    //       }).catch(function(error) {
            
    //       });
    // }

    return (
        <section>
            <div className="text-center">
                <img className="logo-img img-fluid" src={logo} alt=""/>
            </div>
            <div className="login-popup text-center ">
                <br/>
                <br/>
                <br/>
                <h5>Login With</h5>
                {/* onClick={ClickForGoogleSignIn} */}
                
                <button  className="btn btn-outline-dark google-btn">
                Continue with Google
                </button>
                
                <br/>
                <br/>
                <h6>Don't have an account? <Link to='/login'>Create an account</Link> </h6>
            </div>
        </section>
    );
};

export default Login;