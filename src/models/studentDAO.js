import slugify from "slugify";
import shortid from "shortid";

const TABLE_NAME = "studentPal";


class Student {
    constructor(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address) {
        const fullName = firstName+" "+lastName;
        const lliEmail = studentNumber+"@llinstitute.com"
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentNumber = studentNumber;
        this.fullName=fullName;
        this.personlEmail = personlEmail;
        this.lliEmail= lliEmail;
        this.dateOfBirth = dateOfBirth;
        this.immigrationStatus = immigrationStatus;
        this.address = address;
        this.isDeleted = false;
    }
    search(keyword){
      return this.studentNumber.toLowerCase().includes( keyword.toLowerCase() ) ||
      this.firstName.toLowerCase().includes( keyword.toLowerCase() )
    }
}


export default class StudentDAO {
    constructor() {
        const studentsJSON = localStorage.getItem(TABLE_NAME)
        const studentsArr = JSON.parse(studentsJSON);
        if (studentsArr === undefined || studentsArr === null || studentsArr === "") {
            const emptyArr = [];
            const emptyJSON = JSON.stringify(emptyArr);
            localStorage.setItem(TABLE_NAME, emptyJSON);
        }
    }

    /**
      * Private function.
      */
    saveToLocalStorage(studentsArr) {
        localStorage.setItem(TABLE_NAME, JSON.stringify(studentsArr));
    }

    getList() {
        const studentsJSON = localStorage.getItem(TABLE_NAME);
        const studentsArr = JSON.parse(studentsJSON);
        const filteredstudentArr = studentsArr.filter(
            (studentObj)=>studentObj.isDeleted === false
        );
        return filteredstudentArr;
    }

    /**
     * DAO specific function
     */
    getAllList() {
        const studentsJSON = localStorage.getItem(TABLE_NAME);
        const studentsArr = JSON.parse(studentsJSON);
        let students = [];
        let studentObj;
        for (studentObj of studentsArr){
          //firstName, lastName, studentNumber, personlEmail
          let student = new Student(
            studentObj.firstName, studentObj.lastName, studentObj.studentNumber,studentObj.personlEmail,
            studentObj.dateOfBirth, studentObj.immigrationStatus, studentObj.address
          )
          students.push(student)
        }
        return students;
    }


    addObject(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address) {
        const student = new Student(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address);

        const studentsArr = this.getAllList();
        studentsArr.push(student);

        this.saveToLocalStorage(studentsArr);
    }

    getObjectByStudentNumber(studentNumber) {
        let studentObj;
        for (studentObj of this.getAllList()) {
            if (studentObj.studentNumber === studentNumber) {
                return studentObj;
            }
        }
        return null;
    }

    updateObjectByStudentNumber(firstName, lastName, studentNumber, personlEmail, dateOfBirth, immigrationStatus, address) {
        const studentArr = this.getAllList();

        let studentIterator;
        for (studentIterator of studentArr) {
            if (studentIterator.studentNumber === studentNumber) {
                studentIterator.firstName = firstName;
                studentIterator.lastName = lastName;
                studentIterator.personlEmail = personlEmail;
                studentIterator.dateOfBirth = dateOfBirth;
                studentIterator.immigrationStatus = immigrationStatus;
                studentIterator.address = address;
                this.saveToLocalStorage(studentArr);
                break;
            }
        }
    }

    deleteObjectByStudentNumber(studentNumber) {
        const studentArr = this.getAllList();

        let studentIterator;
        for (studentIterator of studentArr) {
            if (studentIterator.studentNumber === studentNumber) {
                studentIterator.isDeleted = true;
                this.saveToLocalStorage(studentArr);
                break;
            }
        }
    }
    permanentlyDeleteObjectByStudentNumber(studentNumber) {
        // STEP 1 - Get the array
        // STEP 2 - Get the object
        // STEP 3 - Splice the array
        // STEP 4 - Update the database.

        const userArr = this.getList(true);
        let i;
        for (i = 0; i < userArr.length; i++) {
            let userObj = userArr[i];
            if (userObj.studentNumber === studentNumber) {
                userArr.splice(i, 1);
                break;
            }
        }

        localStorage.setItem(TABLE_NAME, JSON.stringify(userArr));
    }
}
