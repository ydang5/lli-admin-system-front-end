import React, { Component } from "react";

import StudentDAO from "../models/studentDAO";
import StudentUpdateComponent from "../components/studentUpdateComponent";


export default class StudentUpdateContainer extends Component {
    constructor(props) {
        super(props);
        const { studentNumber } = this.props.match.params;

        const dao = new StudentDAO();
        const studentObj = dao.getObjectByStudentNumber(studentNumber);

        this.state = {
            firstName: studentObj.firstName,
            lastName: studentObj.lastName,
            studentNumber: studentObj.studentNumber,
            personlEmail: studentObj.personlEmail,
            dateOfBirth: studentObj.dateOfBirth,
            immigrationStatus: studentObj.immigrationStatus,
            address: studentObj.address,
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onStudentNumberChange = this.onStudentNumberChange.bind(this);
        this.onPersonlEmailChange = this.onPersonlEmailChange.bind(this);
        this.onImmigrationStatusChange = this.onImmigrationStatusChange.bind(this);
        this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
        });
    }

    onLastNameChange(event) {
        this.setState({
            lastName: event.target.value,
        });
    }

    onStudentNumberChange(event) {
        this.setState({
            studentNumber: event.target.value,
        });
    }

    onPersonlEmailChange(event) {
        this.setState({
            personlEmail: event.target.value,
        });
    }

      onDateOfBirthChange(event) {
          this.setState({
              dateOfBirth: event.target.value,
          })
      }

      onImmigrationStatusChange(event) {
          this.setState({
              immigrationStatus: event.target.value,
          })
      }

      onAddressChange(event) {
          this.setState({
              address: event.target.value,
          })
      }


    onClick(event){
        event.preventDefault();

        const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address } = this.state;
        const dao = new StudentDAO();
        dao.updateObjectByStudentNumber(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address);

        alert("Student information has been updated!");

        this.props.history.push(`/student/${studentNumber}`);
    }

    render() {
        const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address} = this.state;
        const { onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick, onDateOfBirthChange, onImmigrationStatusChange, onAddressChange } = this;
        return (
            <StudentUpdateComponent
               firstName={firstName}
               lastName={lastName}
               studentNumber={studentNumber}
               personlEmail={personlEmail}
               dateOfBirth = {dateOfBirth}
               immigrationStatus = {immigrationStatus}
               address = {address}
               onFirstNameChange={onFirstNameChange}
               onLastNameChange={onLastNameChange}
               onStudentNumberChange={onStudentNumberChange}
               onPersonlEmailChange={onPersonlEmailChange}
               onDateOfBirthChange = {onDateOfBirthChange}
               onImmigrationStatusChange ={onImmigrationStatusChange}
               onAddressChange = {onAddressChange}
               onClick={onClick}
            />
        );
    }
}
