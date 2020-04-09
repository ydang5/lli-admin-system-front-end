import React, { Component } from "react";

import StudentCreateComponent from "../components/studentCreateComponent";
import StudentDAO from "../models/studentDAO";

const DUPLICATE_STUDENT_NUMBER_ERROR = "studentNumberAlreadyExist"

export default class StudentCreateContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            studentNumber: "",
            personlEmail:"",
            dateOfBirth:"",
            immigrationStatus:"",
            address:"",
            studentNumberError:"",
            isValidated:false
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onStudentNumberChange = this.onStudentNumberChange.bind(this);
        this.onPersonlEmailChange = this.onPersonlEmailChange.bind(this);
        this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);
        this.onImmigrationStatusChange = this.onImmigrationStatusChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onClick = this.onClick.bind(this);
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

    onStudentNumberChange(event) {
        this.setState({
            studentNumber: event.target.value,
        })
    }

    onPersonlEmailChange(event) {
        this.setState({
            personlEmail: event.target.value,
        })
    }

    onDateOfBirthChange(event) {
        this.setState({
            personlEmail: event.target.value,
        })
    }

    onImmigrationStatusChange(event) {
        this.setState({
            personlEmail: event.target.value,
        })
    }

    onAddressChange(event) {
        this.setState({
            personlEmail: event.target.value,
        })
    }

    onClick(event) {
        event.preventDefault();

        const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address } = this.state;
        let studentNumberError = "";
        let isValidated = false;


        const studentDAO = new StudentDAO();
        const studentArr = studentDAO.getList()

        let studentObj;
        for (studentObj of studentArr){
          if (studentObj.studentNumber === studentNumber){
            isValidated = true;
            studentNumberError = DUPLICATE_STUDENT_NUMBER_ERROR;
            break;
          }
        }
        if (isValidated = false){
          studentDAO.addObject(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address);

          alert("Saved!")
          this.props.history.push("/student-list");
        }
        else{
          this.setState({
            isValidated: isValidated,
            studentNumberError: studentNumberError,
        });
    }
  }

    render() {
        const { firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address, isValidated, studentNumberError } = this.state;
        const { onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick, onDateOfBirthChange, onImmigrationStatusChange, onAddressChange } = this;
        return (
            <StudentCreateComponent
                firstName={firstName}
                lastName={lastName}
                studentNumber={studentNumber}
                personlEmail={personlEmail}
                dateOfBirth = {dateOfBirth}
                immigrationStatus = {immigrationStatus}
                address = {address}
                isValidated ={isValidated}
                studentNumberError = {studentNumberError}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onStudentNumberChange={onStudentNumberChange}
                onPersonlEmailChange={onPersonlEmailChange}
                onDateOfBirthChange = {onDateOfBirthChange}
                onImmigrationStatusChange = {onImmigrationStatusChange}
                onAddressChange = {onAddressChange}
                onClick={onClick}
            />
        );
    }
}
