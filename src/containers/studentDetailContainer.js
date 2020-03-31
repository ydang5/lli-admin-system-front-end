import React, { Component } from "react";

import StudentDAO from "../models/studentDAO";

import StudentDetailComponent from "../components/studentDetailComponent";


export default class StudentDetailContainer extends Component {
    constructor(props) {
        super(props);

        const { studentNumber } = this.props.match.params;

        const dao = new StudentDAO();
        const studentObj = dao.getObjectByStudentNumber(studentNumber);

        this.state = {
            studentNumber: studentNumber,
            studentObj: studentObj,
        };

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    onUpdateClick(event) {
        event.preventDefault();
        this.props.history.push(`/student-update/${this.state.studentNumber}`);
    }

    render() {
        const { studentObj } = this.state;
        const { onUpdateClick } = this;
        return (
            <StudentDetailComponent
               studentObj={studentObj}
               onUpdateClick={onUpdateClick}
            />
        );
    }
}
