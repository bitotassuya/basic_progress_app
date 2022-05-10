import React, { Fragment } from "react";
import './App.css';

//components

import InputTodo from "./components/inputTodo";

function App() {
  return (
    <div>
      <Fragment>
        <div className="container">
          <InputTodo />
        </div>

      </Fragment></div>


  );
}

export default App;
