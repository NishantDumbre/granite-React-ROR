import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Button from "./components/commons/Button";
import Dashboard from "./components/Dashboard/index";


const Home = () => (
  <div>
    <h1 className="bg-red-400 underline">
      This is the heading for /
    </h1>
    <Button buttonText="submit" className="m-5" />
  </div>
);

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
};

export default App;
