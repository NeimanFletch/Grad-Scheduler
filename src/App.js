import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

const helloWorld = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <p>hello</p>
      <helloWorld />
    </div>
  );
};

export default App;
