import React from "react";
import Signup from "components/Signup/Signup";
import { Breadcrumb, Container } from "react-bootstrap";
import { AuthProvider } from "contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "pages/Profile/Profile";
import Login from "components/Login/Login";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import AdminLayout from "layouts/Admin.js";

function Homepagelayout() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/admin" render={() => <AdminLayout />} />
            <Route path="/homepage" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default Homepagelayout;
