import React, {Component} from 'react';

import { BrowserRouter as  Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const MISMATCH_PASSWORD_ERROR="passwordDoNotMatch"
const DUPLICATE_EMAIL_ERROR = "emailExsited"
const EMPTY_ERROR = "empty"

export default function RegisterComponent(props){
  const {
      email, password, repeatPassword, firstName, lastName, error, onEmailChange, onPasswordChange,
      onRepeatPasswordChange, onFirstNameChange, onLastNameChange, onClick
  } = props;
  return(
    <Container>
      <Image
      src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
      width = {75}
      height = {85}
      rounded
      />
      <br />
      <br />
      <Form>
        <h2>Register</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          placeholder="Enter email"
          value = {email}
          onChange = {(event)=>onEmailChange(event)}
          />
          <Form.Text className="text-muted">
          Please enter your LLI email address
          </Form.Text>
          {error === DUPLICATE_EMAIL_ERROR &&
              <div>
                  <span>Email is not unique, please choose another email</span>
              </div>
          }
          {error === EMPTY_ERROR &&
              <div>
                  <span>Email or password cannot be empty</span>
              </div>
          }
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Password"
          value = {password}
          onChange = {(event)=>onPasswordChange(event)}
          />
          {error === MISMATCH_PASSWORD_ERROR &&
              <div>
                  <span>Password do not match</span>
              </div>
          }
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Repeat Password"
          value = {repeatPassword}
          onChange = {(event)=>onRepeatPasswordChange(event)}
          />
          {error === MISMATCH_PASSWORD_ERROR &&
              <div>
                  <span>Password do not match</span>
              </div>
          }
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="First Name"
          value = {firstName}
          onChange = {(event)=>onFirstNameChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Last Name"
          value = {lastName}
          onChange = {(event)=>onLastNameChange(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event)=>onClick(event) }>
          Submit
        </Button>{' '}
        <Link to="/">Back</Link>
      </Form>
    </Container>
  );
}
