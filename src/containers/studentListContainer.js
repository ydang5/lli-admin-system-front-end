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
            searchTerm: "",
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onTableChange = this.onTableChange.bind(this);
    }

    onTableChange(type, event){
      console.log("onTableChange",type, event);
    }

    onSearchChange(event) {
      console.log("onSearchChange", event.target.value)
        this.setState({
            searchTerm: event.target.value,
        });
    }

    render() {
        const { students, searchTerm  } = this.state;
        const {onTableChange, onSearchChange} = this;
        const filteredStudents = students.filter(
          (studentObj) =>
              studentObj.studentNumber.toLowerCase().includes( searchTerm.toLowerCase() )||
              studentObj.firstName.toLowerCase().includes( searchTerm.toLowerCase() )||
              studentObj.lastName.toLowerCase().includes( searchTerm.toLowerCase() )
      );
        return (
            <StudentListComponent
                students={students}
                searchTerm = {searchTerm}
                filteredStudents = {filteredStudents}
                onSearchChange = {onSearchChange}
                onTableChange = {onTableChange}
            />
        );
    }
}
