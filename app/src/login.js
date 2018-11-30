import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './styles/login.css';

class LoginBox extends Component{

    constructor(props) {
        super(props);

        // this.state = {path:''}
        // if (path != '/register') {
        //
        // }
        //
        // this.setState({path: myPath})
    }


    render(){
        return(

            <Router>
                <div id="login-box">
                    <ul>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>

                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    {/*<Route exact path="/" render={() => (*/}
                        {/*loggedIn ? (*/}
                            {/*<Redirect to="/login"/>*/}
                        {/*) : (*/}
                            {/*<PublicHomePage/>*/}
                        {/*)*/}
                    {/*)}/>*/}
                </div>
            </Router>
        )
    }
}

const Login = ({}) =>
    <div id="login">
        SIGN IN
        <LoginForm/>
    </div>;


class LoginForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: ''
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.setState({login: '', password: ''});
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="login" placeholder="login" onChange={this.onChange} required/>
                <input type="password" name="password" placeholder="Hasło" onChange={this.onChange} required/>
                <input type="submit" value="Zaloguj się"/>
            </form>
        )
    }
}


class Register extends Component{
    render(){
        return(
            <h2>Register</h2>
        )
    }
}



    export default LoginBox;