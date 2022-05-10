import React, { Fragment } from "react";
import './App.css';

//components

import InputTodo from "./components/inputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div>
      <Fragment>
        <div className="container">

          <InputTodo />
          <ListTodos />

        </div>

      </Fragment></div>


  );
}

export default App;
