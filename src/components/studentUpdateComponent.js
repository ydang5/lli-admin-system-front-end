import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image"
import Continer from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function StudentUpdateComponent(props) {
    const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address,
       onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick, onDateOfBirthChange, onImmigrationStatusChange, onAddressChange } = props;
    return(
        <Continer>
          <Image
          src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
          width = {75}
          height = {85}
          rounded
          />
          <br />
          <br />
            <h1>Student Update</h1>
            <Form validated={true}>
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
              onChange = {(event)=>onStudentNumberChange(event)}
              />
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
              value = {immigrationStatus}
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

                <Link to={`/student/${studentNumber}`}>Back</Link>&nbsp;&nbsp;
                <Button onClick={(event)=>onClick(event)}>Save</Button>
            </Form>
        </Continer>
    );
}
