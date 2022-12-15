import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import PersonContext from "./contexts/PersonContext";
import autobind from "autobind-decorator";
import { action, computed, runInAction } from "mobx";

function App() {
  const personStore = useContext(PersonContext);

  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();
  console.log(personStore.age, personStore.name);

  const click = () => {
    // personStore.plus();
    setTimeout(() => {
      personStore.testAction();
    }, 500);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={click}>plus</button>
        </p>
        <p>
          {personStore.age},{personStore.name}
        </p>
      </header>
    </div>
  );
}

// export default observer(App);
// @observer
// class App extends React.Component {
//   static contextType = PersonContext;

//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plus();
//   }

//   render() {
//     const personStore = this.context;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             <button onClick={this.click}>plus</button>
//           </p>
//           <p>{personStore.age10}</p>
//         </header>
//       </div>
//     );
//   }
// }

export default observer(App);
