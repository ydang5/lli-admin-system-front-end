import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image"
import Continer from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DUPLICATE_STUDENT_NUMBER_ERROR = "studentNumberAlreadyExist"


export default function StudentCreateComponent(props) {
    const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address, isValidated, studentNumberError } = props;
    const { onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick, onDateOfBirthChange, onImmigrationStatusChange, onAddressChange } = props;
    return (
        <Continer>
          <Image
          src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
          width = {75}
          height = {85}
          rounded
          />
          <br />
          <br />
          <Form validated={isValidated}>
            <h1>Student Create</h1>
            <Form.Group controlId="formBasicFirstName" >
              <Form.Label>First Name</Form.Label>
              <Form.Control
              required
              type="text"
              placeholder="Enter First Name"
              value = {firstName}
              onChange = {(event)=>onFirstNameChange(event)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName" >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
              required
              type="text"
              placeholder="Enter Last Name"
              value = {lastName}
              onChange = {(event)=>onLastNameChange(event)}
              />
            </Form.Group>


            <Form.Group controlId="formBasicStudentNumber" >
              <Form.Label>Student Number</Form.Label>
              <Form.Control
              required
              type="number"
              placeholder="Enter Student Number"
              value = {studentNumber}
              isInvalid = {studentNumberError === DUPLICATE_STUDENT_NUMBER_ERROR}
              onChange = {(event)=>onStudentNumberChange(event)}
              />
              <Form.Control.Feedback type="invalid">
                {studentNumberError === DUPLICATE_STUDENT_NUMBER_ERROR &&
                    <div>
                        <span>Student number is already existed</span>
                    </div>
                }
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPersonlEmail" >
              <Form.Label>Personal Email</Form.Label>
              <Form.Control
              required
              type="email"
              placeholder="Enter Personal Email"
              value = {personlEmail}
              onChange = {(event)=>onPersonlEmailChange(event)}
              />
            </Form.Group>

            <Form.Group controlId="formDateOfBirth" >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
              required
              type="date"
              placeholder="Enter Date of Birth"
              value = {dateOfBirth}
              onChange = {(event)=>onDateOfBirthChange(event)}
              />
            </Form.Group>

            <Form.Group controlId="formImmigrationStatus" >
              <Form.Label>Immigration Status</Form.Label>
              <Form.Control
              required
              as = "select"
              placeholder="Enter Date of Birth"
              value = {dateOfBirth}
              onChange = {(event)=>onImmigrationStatusChange(event)}
              >
              <option>Choose...</option>
              <option>Visitor</option>
              <option>Study Permit</option>
              <option>Work Permit</option>
              <option>Permanent Residence</option>
              <option>Canadian Citizen</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formAddress" >
              <Form.Label>Address</Form.Label>
              <Form.Control
              required
              type="text"
              placeholder="Enter Address"
              value = {address}
              onChange = {(event)=>onAddressChange(event)}
              />
            </Form.Group>

            <Button onClick={ (event)=>{ onClick(event) } }>Save</Button>

            <Link to="/student-list">Back</Link>
          </Form>
        </Continer>
    );
}
