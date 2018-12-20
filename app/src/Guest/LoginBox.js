import {Component} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import React from "react";

class LoginBox extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <Router>
                <div id="login-box">
                    <ul>
                        <li>
                            <Link to="/login">Sign in</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <Route exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </Router>
        )
    }
}

export default LoginBox;