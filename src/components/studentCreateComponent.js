import React, { Component } from "react";
import { Link } from "react-router-dom";

const DUPLICATE_STUDENT_NUMBER_ERROR = "studentNumberAlreadyExist"


export default function StudentCreateComponent(props) {
    const { firstName, lastName, studentNumber, personlEmail, error } = props;
    const { onFirstNameChange, onLastNameChange, onStudentNumberChange, onPersonlEmailChange, onClick } = props;
    return (
        <div>
            <h1>Student Create</h1>

            <input
               type="text"
               value={firstName}
               onChange={onFirstNameChange}
               placeholder="First Name"
            />

            <input
               type="text"
               value={lastName}
               onChange={onLastNameChange}
               placeholder="Last Name"
            />

            <input
               type="text"
               value={studentNumber}
               onChange={onStudentNumberChange}
               placeholder="Student Number"
            />{error === DUPLICATE_STUDENT_NUMBER_ERROR &&
                <div>
                  <span>Student Number is Already Existed</span>
                </div>
              }

            <input
               type="email"
               value={personlEmail}
               onChange={onPersonlEmailChange}
               placeholder="Student Personal Email Address"
            />

            <button onClick={ (event)=>{ onClick(event) } }>Save</button>

            <Link to="/student-list">Back</Link>
        </div>
    );
}
