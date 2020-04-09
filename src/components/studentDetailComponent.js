import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image"
import Continer from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export default function StudentDetailComponent(props) {
    const { studentObj, onUpdateClick } = props;
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
          <br />
          <ListGroup>
            <ListGroup.Item><h2>Student Details</h2></ListGroup.Item>
            <ListGroup.Item><strong>Full Name: {studentObj.fullName}</strong></ListGroup.Item>
            <ListGroup.Item><strong>First Name: {studentObj.firstName}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Last Name: {studentObj.lastName}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Student Number: {studentObj.studentNumber}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Personal Email Address: {studentObj.personlEmail}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Date of Birth: {studentObj.dateOfBirth}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Immigration Status: {studentObj.immigrationStatus}</strong></ListGroup.Item>
            <ListGroup.Item><strong>Address: {studentObj.address}</strong></ListGroup.Item>
            <ListGroup.Item><Link to="/student-list">Back</Link>&nbsp;&nbsp;</ListGroup.Item>
            <ListGroup.Item><Button onClick={ (event)=>onUpdateClick(event) }>Update</Button></ListGroup.Item>
          </ListGroup>
        </Continer>
    );
}
