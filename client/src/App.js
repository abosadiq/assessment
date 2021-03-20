import React from "react";
import "./App.css";
import Storage from "./components/Strorage";
import { ContextApi as Provider } from "./components/contextApi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import From from "./components/From";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Storage} />
            <Route path="/signup" component={From} /> */}
          </Switch>
        </Router>
        <From />
        <Storage />
      </Provider>
    </div>
  );
}

export default App;
