import React from "react";
import * as ROUTES from "./constants/routes";
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup}  from "./pages";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/browse" element={<Browse />}>
          </Route>
          <Route exact path="/signin" element={<Signin />}>
          </Route>
          <Route exact path="/signup" element={<Signup />}>
          </Route>
          <Route exact path={ROUTES.HOME} element={
            <Home />
          }>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
