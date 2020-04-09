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
            emailError:"",
            password: "",
            passwordError:"",
            repeatPassword: "",
            repeatPasswordError:"",
            firstName: "",
            firstNameError:"",
            lastName: "",
            lastNameError:"",
            isValidated:false
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
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

    onBackClick(event){
      event.preventDefault();
      this.props.history.push("/");
    }

    onClick(event) {
        event.preventDefault();
        const { email, password, repeatPassword, firstName, lastName } = this.state;
        let emailError = "";
        let passwordError = "";
        let repeatPasswordError = "";
        let firstNameError = "";
        let lastNameError = "";
        let isValidated = false;

        if (email===""|| email===null||email===undefined) {
           isValidated = true;
           emailError = EMPTY_ERROR;
         }
        if (password===""|| password===null||password===undefined) {
            isValidated = true;
            passwordError = EMPTY_ERROR;
          }

        if (repeatPassword===""|| repeatPassword===null||repeatPassword===undefined) {
            isValidated = true;
            repeatPasswordError = EMPTY_ERROR;
          }

        if (password !== repeatPassword) {
            isValidated = true;
            repeatPasswordError = MISMATCH_PASSWORD_ERROR;
            passwordError = MISMATCH_PASSWORD_ERROR;
          }

        if (firstName===""|| firstName===null||firstName===undefined) {
            isValidated = true;
            firstNameError = EMPTY_ERROR;
          }

        if (lastName===""|| lastName===null||lastName===undefined) {
            isValidated = true;
            lastNameError = EMPTY_ERROR;
          }

        const userDAO = new UserDAO();
        const userArr = userDAO.getList(true)
        let userObj;
        for (userObj of userArr){
          if (userObj.email === email){
              isValidated = true;
              emailError = DUPLICATE_EMAIL_ERROR;
              break;
            }
          }


        if (isValidated === false){
            userDAO.addObject(email, password, repeatPassword, firstName, lastName);
              this.props.history.push("/dashboard");
        }else{
          this.setState({
            isValidated: isValidated,
            emailError: emailError,
            passwordError:passwordError,
            repeatPasswordError: repeatPasswordError,
            firstNameError: firstNameError,
            lastNameError: lastNameError,
          });
        }
    }

    render() {
        const {
          email, password, repeatPassword, firstName, lastName, isValidated, emailError, passwordError,
          repeatPasswordError, firstNameError, lastNameError
         } = this.state;
        const { onEmailChange, onPasswordChange, onRepeatPasswordChange, onFirstNameChange, onLastNameChange, onClick, onBackClick } = this;
        return (
            <RegisterComponent
                email={email}
                password={password}
                repeatPassword ={repeatPassword}
                firstName={firstName}
                lastName={lastName}
                emailError={emailError}
                passwordError = {passwordError}
                repeatPasswordError = {repeatPasswordError}
                firstNameError = {firstNameError}
                lastNameError = {lastNameError}
                isValidated = {isValidated}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onRepeatPasswordChange={onRepeatPasswordChange}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onClick={onClick}
                onBackClick = {onBackClick}
            />
        );
    }
}
