import React, { Component } from "react";

import StudentListComponent from "../components/studentListComponent";
import StudentDAO from "../models/studentDAO";


export default class StudentListContainer extends Component {
    constructor(props) {
        super(props);

        const dao = new StudentDAO();
        const students = dao.getList();
        this.state = {
            students: students,
        }
    }

    render() {
        const { students } = this.state;
        return (
            <StudentListComponent
                students={students}
            />
        );
    }
}
