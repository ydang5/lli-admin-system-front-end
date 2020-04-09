import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function StudentArchiveComponent(props) {
    const { studentNumber, studentObj, onDeleteClick } = props;
    return(
        <div>
            <h1>Are you sure?</h1>
            <p>You are about to archive the <strong>{studentObj.fullName}</strong> student file. Are you sure you want to continue?</p>
            <p>
                <Link to="/student-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event, studentNumber)=>onDeleteClick(event, studentNumber) }>Delete</button>

            </p>
        </div>
    );
}
