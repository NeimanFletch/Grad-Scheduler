import logo from "./logo.svg";
import "./App.css";
import React from "react";

class coreClasses extends React.Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <coreClasses title="fas" />
    </div>
  );
}

export default App;
