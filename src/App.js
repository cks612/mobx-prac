import "./App.css";
import React from "react";
import PersonContainer from "./\bcontainers/PersonContainer";
import TodoContainer from "./\bcontainers/TodoContainer";
import TodoFormContainer from "./\bcontainers/TodoFormContainer";
import UserListContainer from "./\bcontainers/UserListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContainer />
        <TodoFormContainer />
        <UserListContainer />
      </header>
    </div>
  );
}

export default App;
