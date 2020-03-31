import slugify from "slugify";
import shortid from "shortid";
import hash from "hash.js";


const TABLE_KEY = "UserTableKey";


class User {
    constructor(email, passwordPlaintext, firstName, lastName) {
        const fullName = firstName+" "+lastName;
        const slug = slugify(fullName.toLowerCase())+"-"+shortid.generate();
        const passwordHash = hash.sha256().update(passwordPlaintext).digest('hex')
        this.slug = slug;
        this.email = email;
        this.passwordHash = passwordHash;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isDeleted=false;
    }
}


export default class UserDAO {
    constructor() {
        const usersJSON = localStorage.getItem(TABLE_KEY);
        const usersArr = JSON.parse(usersJSON);

        if (usersArr === undefined || usersArr === null || usersArr === "" ) {
            const emptyArray = [];
            localStorage.setItem(TABLE_KEY, JSON.stringify(emptyArray));
        }
    }

    /**
     *  Function will return all the `User` objects which were not deleted. If
     *  you want to include the deleted `User` objects then please set `showAll`
     *  to be `true`;
     */
    getList(showAll=false) {
        const usersJSON = localStorage.getItem(TABLE_KEY);
        const usersArr = JSON.parse(usersJSON);
        if (showAll) {
            return usersArr;
        } else {
            return usersArr.filter(
                userObj => userObj.isDeleted === false
            );
        }
    }

    getObjectBySlug(slug) {
        const userArr = this.getList(true);
        let userObj;
        for (userObj of userArr) {
            if (userObj.slug === slug) {
                return userObj;
            }
        }
        return null;
    }

    getObjectByEmail(email) {
        const userArr = this.getList(true);
        let userObj;
        for (userObj of userArr) {
            if (userObj.email === email) {
                return userObj;
            }
        }
        return null;
    }

    addObject(email, password, firstName, lastName) {
        const userObj = new User(email, password, firstName, lastName);

        const usersArr = this.getList(true);
        usersArr.push(userObj);
        localStorage.setItem(TABLE_KEY, JSON.stringify(usersArr));
    }

    updateObjectBySlug(slug, email, password, firstName, lastName) {
        // GET
        const objectList = this.getList(true);

        // VALIDATION
        //TODO: Add your own validation.
        // Example: Email needs to be unique.

        // FIND OBJECT
        let object;
        for (object of objectList) {
            if (object.slug === slug) {
                // UPDATE OBJECT
                object.email = email;
                object.password = password;
                object.firstName = firstName;
                object.lastName = lastName;
                break;
            }
        }

        // UPDATE DATABASE
        localStorage.setItem(TABLE_KEY, JSON.stringify(objectList))
    }

    updateObjectByEmail(email, slug, password, firstName, lastName) {
        // GET
        const objectList = this.getList(true);

        // VALIDATION
        //TODO: Add your own validation.

        // FIND OBJECT
        let object;
        for (object of objectList) {
            if (object.email === email) {
                // UPDATE OBJECT
                object.slug = slug;
                object.password = password;
                object.firstName = firstName;
                object.lastName = lastName;
                break;
            }
        }

        // UPDATE DATABASE
        localStorage.setItem(TABLE_KEY, JSON.stringify(objectList))
    }

    deleteObjectBySlug(slug) {
        const userArr = this.getList(true);

        let userObj;
        for (userObj of userArr) {
           if (userObj.slug === slug) {
               userObj.isDeleted = true;
               break;
           }
        }

        localStorage.setItem(TABLE_KEY, JSON.stringify(userArr));
    }

    permanentlyDeleteObjectBySlug(slug) {
        // STEP 1 - Get the array
        // STEP 2 - Get the object
        // STEP 3 - Splice the array
        // STEP 4 - Update the database.

        const userArr = this.getList(true);
        let i;
        for (i = 0; i < userArr.length; i++) {
            let userObj = userArr[i];
            if (userObj.slug === slug) {
                userArr.splice(i, 1);
                break;
            }
        }

        localStorage.setItem(TABLE_KEY, JSON.stringify(userArr));
    }
    authenticate(email, passwordPlaintext) {
      const userObj = this.getObjectByEmail(email);
      if (userObj === null) {
          return null;
      }

      const passwordHash = hash.sha256().update(passwordPlaintext).digest('hex')
      const isValid = userObj.passwordHash === passwordHash;


      if (isValid) {
          return userObj;
      } else {
          return null;
      }
      }
}
