import {Component} from "react";
import React from "react";
import './styles/register.css';

class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            confirmpswd: '',
            name: '',
            surname: '',
            email:'',
            phone:''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        if (this.state.password === this.state.confirmpswd){
            this.setState({
                    login: '',
                    password: '',
                    confirmpswd: '',
                    name: '',
                    surname: '',
                    email:'',
                    phone:''
                }
            );
        }
        else{
            const inputs = document.querySelectorAll("input[type='password']");
            for(let input of inputs) {
                input.style.background = 'tomato';
                input.style.border = '1px solid darkred';
            }
        }
    }

    render(){
        return(
            <div id="register">
                REGISTER
                <RegisterForm onChange={this.onChange} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const RegisterForm = ({onChange, onSubmit}) =>
    <form onSubmit = {onSubmit}>
        <label>  Imię:
            <input type="text" onChange={onChange} name='name' required/> </label>
        <label> Nazwisko:
            <input type="text" onChange={onChange} name='surname' required/> </label>
        <label> Login:
            <input type="text" onChange={onChange} name='login' required/> </label>
        <label> Hasło:
            <input type="password" onChange={onChange} name='password' required/></label>
        <label> Potwierdź Hasło:
            <input type='password' onChange={onChange} name='confirmpswd' required/></label>
        <label> E-mail:
            <input type="email" onChange={onChange} name='email' required/></label>
        <label> Numer Telefonu:
            <input type="tel" onChange={onChange} name='phone' required/></label>
        <label>
            <input type="submit" value="Utwórz konto"/> </label>
    </form>;


export default Register;