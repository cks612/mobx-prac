import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { observable } from "mobx";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStore";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

// const isLogin = observable(true);
// const person = observable({
//   name: "Voyage",
//   age: 29,
// });
// const personStore = new PersonStore();

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

const rootStore = new RootStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
