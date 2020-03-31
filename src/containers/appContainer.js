import React, { Component } from 'react';

import IndexContainer from "./indexContainer";
import AboutContainer from "./aboutContainer";
// import NavigationContainer from "./navigationContainer";
import NotFound404Container from "./notFound404Container";
import RegisterConatiner from "./registerContainer";
import LoginContainer from "./loginContainer";
import DashboardContainer from "./dashboardContainer"
import StudentListContainer from "./studentListContainer"
import StudentCreateContainer from "./studentCreateContainer"
import StudentDetailContainer from "./studentDetailContainer";

import { BrowserRouter as Router, Route, withRouter, Switch} from "react-router-dom";


class AppContainer extends Component {
  render() {

    return (
        <Router>
         <div>
           {/*  Bind the `URL path` to the `Component` you want to construct / mount / render. */}
           <Switch>
               <Route path="/" exact component={IndexContainer} />
                <Route path="/about" exact component={AboutContainer} />
                {/* <Route path="/navigation" exact component={NavigationContainer} />*/}
                <Route path="/register" exact component={RegisterConatiner} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/dashboard" exact component={DashboardContainer} />
                <Route path="/student-list" exact components={StudentListContainer} />
                <Route path="/student-create" exact components={StudentCreateContainer} />
                <Route path="/student/:studentNumber" exact component={StudentDetailContainer} />
                <Route component={NotFound404Container} />

           </Switch>
         </div>
       </Router>
    );
  }
}
export default withRouter(AppContainer);
