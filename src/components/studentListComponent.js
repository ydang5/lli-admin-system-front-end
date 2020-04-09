import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Image from "react-bootstrap/Image"
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function detailsFormatter(cell, row) {
    return (
        <span>
            <Button variant="outline-primary"><Link to={`/student/${row.studentNumber}`}>View</Link></Button>
        </span>
    );
}

function deleteFormatter(cell, row) {
    return (
        <span>
            <Button variant="outline-primary"><Link to={`/student-archive/${row.studentNumber}`}>Archive</Link></Button>&nbsp;&nbsp;
            <Button variant="outline-primary"><Link to={`/student-delete/${row.studentNumber}`}>Delete</Link></Button>
        </span>
    );
}


export default function StudentListComponent(props) {

    const { students, searchTerm, filteredStudents, onSearchChange, onTableChange } = props;

    const columns = [{
      dataField: 'firstName',
      text: 'Student First Name'
    },{
      dataField: 'lastName',
      text: 'Student Last Name'
    },{
      dataField: 'fullName',
      text: 'Student Full Name'
    },{
      dataField: 'studentNumber',
      text: 'Student Number'
    },{
      dataField: "personlEmail",
      text: "Student Personal Email"
    },{
      dataField: "dateOfBirth",
      text: "Date of Birth"
    },{
      dataField: "immigrationStatus",
      text: "Immigration Status"
    },{
      dataField: "address",
      text: "Address"
    },{
      dataField: "studentNumber",
      text: "Details",
      formatter: detailsFormatter,
    },{
      dataField: "studentNumber",
      text: "Delete Options",
      formatter: deleteFormatter,
    }];

// TODO: filter
// TODO: add row and col
    return (
      <Container fluid
      >

              <Image
              src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
              width = {75}
              height = {85}
              rounded
              />
              <h2>Student List</h2>
              <Button variant="outline-primary"><Link to="student-create">Create a Student</Link></Button>
              <br /><br />
              <input
              onChange={(event)=>onSearchChange(event)}
              placeholder = "search"
              ></input>
              <br />
              <br />
              <BootstrapTable
                 wrapperClasses="table-responsive"
                 keyField={"studentNumber"}
                 data={ filteredStudents }
                 columns={ columns }
                 pagination={ paginationFactory() }
                 onTableChange = {onTableChange}
              />
              <br />
              <Button variant="outline-primary"><Link to="/dashboard">Back</Link></Button>
      </Container>
    );
}
