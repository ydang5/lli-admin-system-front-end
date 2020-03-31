import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Image from "react-bootstrap/Image"




function detailsFormatter(cell, row) {
    return (
        <span>
            <Link to={`/student-delete/${row.studentNumber}`}>Delete</Link>&nbsp;&nbsp;
            <Link to={`/student/${row.studentNumber}`}>View</Link>
        </span>
    );
}


export default function StudentListComponent(props) {

    const { students } = props;

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
      dataField: "studentNumber",
      text: "Details",
      formatter: detailsFormatter,
    }];

// TODO: filter 
    return (
        <div>
            <Image
            src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
            width = {75}
            height = {85}
            rounded
            />
            <h1>Student List</h1>
            <Link to="student-create">Create a Student</Link><br /><br />
            <br />
            <BootstrapTable
               keyField='studentNumber'
               data={ students }
               columns={ columns }
               pagination={ paginationFactory() }
            />
            <br />
            <Link to="/dashboard">Back</Link>
        </div>
    );
}
