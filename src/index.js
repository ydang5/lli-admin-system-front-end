import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './containers/appContainer';
import * as serviceWorker from './serviceWorker';



import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
