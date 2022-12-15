import "./App.css";
import React from "react";
import PersonContainer from "./\bcontainers/PersonContainer";
import TodoContainer from "./\bcontainers/TodoContainer";
import TodoFormContainer from "./\bcontainers/TodoFormContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
