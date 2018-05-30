import React from "react";
import { render } from "react-dom";
import MainComponent from "./components/MainComponent";

import "./styles.scss";

const App = () => (
  <div>
    <h1>Hello</h1>
    <h2>Some heading</h2>
    <MainComponent />
  </div>
);

render(<App />, document.getElementById("app"));
