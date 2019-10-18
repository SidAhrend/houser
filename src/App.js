import React from "react";
import { HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Wizard from "./Components/Wizard/Wizard";
// import House from "./Components/House/House";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Header />
          {Routes}
      </HashRouter>
    </div>
  );
}

export default App;
