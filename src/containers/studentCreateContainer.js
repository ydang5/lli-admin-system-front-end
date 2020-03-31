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
            error:"",
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onStudentNumberChange = this.onStudentNumberChange.bind(this);
        this.onPersonlEmailChange = this.onPersonlEmailChange.bind(this);
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

    onClick(event) {
        event.preventDefault();

        const { firstName, lastName, studentNumber, personlEmail } = this.state;
        this.setState({
          error: "",
        });

        const studentDAO = new StudentDAO();
        const studentArr = studentDAO.getList()
        let studentObj;
        for (studentObj of studentArr){
          if (studentObj.studentNumber === studentNumber){
            this.setState({
                error: DUPLICATE_STUDENT_NUMBER_ERROR
            })
          }
        }
        if (this.state.error === ""){
          studentDAO.addObject(firstName, lastName, studentNumber, personlEmail);

          alert("Saved!")
          this.props.history.push("/student-list");
        }
    }

    render() {
        const { firstName, lastName, studentNumber, personlEmail } = this.state;
        const { onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick } = this;
        return (
            <StudentCreateComponent
                firstName={firstName}
                lastName={lastName}
                studentNumber={studentNumber}
                personlEmail={personlEmail}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onStudentNumberChange={onStudentNumberChange}
                onPersonlEmailChange={onPersonlEmailChange}
                onClick={onClick}
            />
        );
    }
}
