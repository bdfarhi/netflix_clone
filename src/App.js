import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const {user} = useAuthListener(); 

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;