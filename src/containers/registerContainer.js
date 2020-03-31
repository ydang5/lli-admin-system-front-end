import React, { Component } from "react";

import RegisterComponent from "../components/registerComponent";
import UserDAO from "../models/userDAO";

const MISMATCH_PASSWORD_ERROR="passwordDoNotMatch"
const DUPLICATE_EMAIL_ERROR = "emailExsited"
const EMPTY_ERROR = "empty"

export default class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        const userDAO = new UserDAO();
        this.state = {
            email: "",
            password: "",
            repeatPassword: "",
            firstName: "",
            lastName: "",
            error:"",
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onClick = this.onClick.bind(this);
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

    onRepeatPasswordChange(event) {
        this.setState({
            repeatPassword: event.target.value,
        })
    }

    onFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
        })
    }

    onLastNameChange(event) {
        this.setState({
            lastName: event.target.value,
        })
    }

    onClick(event) {
        event.preventDefault();
        const { email, password, repeatPassword, firstName, lastName } = this.state;
        this.setState({
          error: "",
        });
        if (password !== repeatPassword) {
            this.setState({
                error: MISMATCH_PASSWORD_ERROR
            });
          }
        const userDAO = new UserDAO();
        const userArr = userDAO.getList(true)
        let userObj;
        for (userObj of userArr){
          if (userObj.email === email){
            this.setState({
                error: DUPLICATE_EMAIL_ERROR
            })
          }
        }
        if (password===""|| password===null||password===undefined) {
            this.setState({
                error: EMPTY_ERROR
            });
          }
        if (email===""|| email===null||email===undefined) {
            this.setState({
                error: EMPTY_ERROR
            });
          }
        if (this.state.error === ""){
            userDAO.addObject(email, password, repeatPassword, firstName, lastName);
              this.props.history.push("/dashboard");
        }
    }

    render() {
        const { email, password, repeatPassword, firstName, lastName } = this.state;
        const { onEmailChange, onPasswordChange, onRepeatPasswordChange, onFirstNameChange, onLastNameChange, onClick } = this;
        return (
            <RegisterComponent
                email={email}
                password={password}
                repeatPassword ={repeatPassword}
                firstName={firstName}
                lastName={lastName}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onRepeatPasswordChange={onRepeatPasswordChange}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onClick={onClick}
            />
        );
    }
}
