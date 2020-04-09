import React, { Component } from "react";

import LoginComponent from "../components/loginComponent";
import UserDAO from "../models/userDAO";


export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value,
        })
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value,
        })
    }

    onBackClick(event){
      event.preventDefault();
      this.props.history.push("/");
    }

    onClick(event) {
        event.preventDefault();
        const { email, password } = this.state;

        const userDAO = new UserDAO();
        const userObj = userDAO.authenticate(email, password);

        if (userObj === null) {
            alert("Wrong email or password");
        } else {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        const { email, password } = this.state;
        const { onEmailChange, onPasswordChange, onClick, onBackClick } = this;
        return (
            <LoginComponent
                email={email}
                password={password}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onClick={onClick}
                onBackClick = {onBackClick}
            />
        );
    }
}
