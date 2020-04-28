import React, {Component} from 'react';

import { BrowserRouter as  Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const MISMATCH_PASSWORD_ERROR="passwordDoNotMatch"
const DUPLICATE_EMAIL_ERROR = "emailExsited"
const EMPTY_ERROR = "empty"

export default function RegisterComponent(props){
  const {
      email, password, repeatPassword, firstName, lastName, isValidated, onEmailChange, onPasswordChange,
      onRepeatPasswordChange, onFirstNameChange, onLastNameChange, onClick, emailError, passwordError,
      repeatPasswordError, firstNameError, lastNameError, onBackClick
  } = props;

  return(
    <Container>
    <Row>
      <Col>
      </Col>
      <Col>
      <Image
      src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
      width = {75}
      height = {85}
      rounded
      />
      <br />
      <br />
      <Form validated={isValidated}>
        <h2>Register</h2>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
          required
          isInvalid = {emailError === EMPTY_ERROR || emailError===DUPLICATE_EMAIL_ERROR}
          type="email"
          placeholder="Enter email"
          value = {email}
          onChange = {(event)=>onEmailChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {emailError === DUPLICATE_EMAIL_ERROR &&
                <div>
                    <span>Email is not unique, please choose another email</span>
                </div>
            }
            {emailError === EMPTY_ERROR &&
                <div>
                    <span>Email cannot be empty</span>
                </div>
            }
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
          Please enter your LLI email address
          </Form.Text>

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          isInvalid = {passwordError === EMPTY_ERROR || passwordError===MISMATCH_PASSWORD_ERROR}
          required
          type="password"
          placeholder="Password"
          value = {password}
          onChange = {(event)=>onPasswordChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError === MISMATCH_PASSWORD_ERROR &&
                <div>
                    <span>Passwords do not match</span>
                </div>
            }
            {passwordError === EMPTY_ERROR &&
                <div>
                    <span>Password cannot be empty</span>
                </div>
            }
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
          isInvalid = {repeatPasswordError === EMPTY_ERROR || repeatPasswordError===MISMATCH_PASSWORD_ERROR}
          required
          type="password"
          placeholder="Repeat Password"
          value = {repeatPassword}
          onChange = {(event)=>onRepeatPasswordChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {repeatPasswordError === MISMATCH_PASSWORD_ERROR &&
                <div>
                    <span>Passwords do not match</span>
                </div>
            }
            {repeatPasswordError === EMPTY_ERROR &&
                <div>
                    <span>Repeat password cannot be empty</span>
                </div>
            }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          isInvalid = {firstNameError === EMPTY_ERROR }
          required
          type="text"
          placeholder="First Name"
          value = {firstName}
          onChange = {(event)=>onFirstNameChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {firstNameError === EMPTY_ERROR &&
                <div>
                    <span>First name cannot be empty</span>
                </div>
            }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          isInvalid = {lastNameError === EMPTY_ERROR }
          required
          type="text"
          placeholder="Last Name"
          value = {lastName}
          onChange = {(event)=>onLastNameChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {lastNameError === EMPTY_ERROR &&
                <div>
                    <span>Last name cannot be empty</span>
                </div>
            }
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event)=>onClick(event) }>
          Submit
        </Button>{' '}{' '}
        <Button variant="primary" type="submit" onClick={(event)=>onBackClick(event) }>
        Back
        </Button>
      </Form>
      </Col>
      <Col>
      </Col>
    </Row>
    </Container>
  );
}
