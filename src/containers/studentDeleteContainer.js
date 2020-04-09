import React, { Component } from "react";

import StudentDAO from "../models/studentDAO";

import StudentDeleteComponent from "../components/studentDeleteComponent";


export default class StudentDeleteContainer extends Component {
    constructor(props) {
        super(props);

        const { studentNumber } = this.props.match.params;

        const dao = new StudentDAO();
        const studentObj = dao.getObjectByStudentNumber(studentNumber);

        this.state = {
            studentNumber: studentNumber,
            studentObj: studentObj,
        };

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(event) {
        event.preventDefault();
        const dao = new StudentDAO();
        const { studentNumber } = this.state;
        dao.permanentlyDeleteObjectByStudentNumber(studentNumber);

        alert("The student has been permently deleted!");

        this.props.history.push("/student-list");
    }

    render() {
        const { studentNumber, studentObj } = this.state;
        const { onDeleteClick } = this;
        return (
            <StudentDeleteComponent
               studentNumber={studentNumber}
               studentObj={studentObj}
               onDeleteClick={onDeleteClick}
            />
        );
    }
}
