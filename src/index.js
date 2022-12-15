import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { observable } from "mobx";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStore";

// const isLogin = observable(true);
// const person = observable({
//   name: "Voyage",
//   age: 29,
// });
const personStore = new PersonStore();

// setInterval(() => {
//   personStore.age++;
// }, 1000);

// autorun(() => {
//   console.log(isLogin.get());
//   console.log(person.age);
//   console.log(personStore.age);
// });

// isLogin.set(false);

// person.age = 20;

// personStore.age = 40;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonContext.Provider value={personStore}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>
);
