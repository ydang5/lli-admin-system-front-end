import React, { Component } from "react";

import StudentDAO from "../models/studentDAO";

import StudentArchiveComponent from "../components/studentArchiveComponent";


export default class StudentArchiveContainer extends Component {
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
        dao.deleteObjectByStudentNumber(studentNumber);

        alert("The student has been achived!");

        this.props.history.push("/student-list");
    }

    render() {
        const { studentNumber, studentObj } = this.state;
        const { onDeleteClick } = this;
        return (
            <StudentArchiveComponent
               studentNumber={studentNumber}
               studentObj={studentObj}
               onDeleteClick={onDeleteClick}
            />
        );
    }
}
