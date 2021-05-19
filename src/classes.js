import "./App.css";
import React from "react";

class Coreclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    //can loop with create element
    return <div>{React.createElement("p", {}, "pf")}</div>;
  }
}

class App extends React.Component {
  render() {
    return <Coreclass />;
  }
}

export { App, Coreclass };
