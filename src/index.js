import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
          <Header />
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
