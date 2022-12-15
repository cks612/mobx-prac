import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import PersonContext from "./contexts/PersonContext";
import autobind from "autobind-decorator";

// function App() {
//   const personStore = useContext(PersonContext);

//   const click = () => {
//     personStore.plus();
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//         <p>{personStore.age}</p>
//       </header>
//     </div>
//   );
// }

// export default observer(App);
@observer
class App extends React.Component {
  static contextType = PersonContext;

  @autobind
  click() {
    const personStore = this.context;
    personStore.plus();
  }

  render() {
    const personStore = this.context;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.click}>plus</button>
          </p>
          <p>{personStore.age}</p>
        </header>
      </div>
    );
  }
}

export default observer(App);
