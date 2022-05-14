import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";
//components

import InputTodo from "./components/inputTodo";
import ListTodos from "./components/ListTodos";

function App() {

  return (
    <Router>

      <Fragment>

        <header className="header">
          <div>
            This is a multicontainer application</div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>

        </header>
        <div className="main">
          <Routes>

            <Route exact path="/" component={MainComponent} />
            <Route path="/otherpage" component={OtherPage} />
          </Routes >
        </div>
        <div className="container">

          <InputTodo />
          <ListTodos />

        </div>

      </Fragment>
    </Router>

  );
}

export default App;
