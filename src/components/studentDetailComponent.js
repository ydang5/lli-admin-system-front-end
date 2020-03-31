import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function StudentDetailComponent(props) {
    const { studentObj, onUpdateClick } = props;
    return(
        <div>
            <h1>{studentObj.fullName}</h1>
            <p>First Name: {studentObj.firstName}</p>
            <p>Last Name: {studentObj.lastName}</p>
            <p>Student Number: {studentObj.studentNumber}</p>
            <p>Personal Email Address: {studentObj.personlEmail}</p>
            <p>
                <Link to="/student-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event)=>onUpdateClick(event) }>Update</button>

            </p>
        </div>
    );
}
