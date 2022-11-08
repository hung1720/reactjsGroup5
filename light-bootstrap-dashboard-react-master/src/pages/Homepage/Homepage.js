import React from "react";
import Signup from "components/Signup/Signup";
import { Container } from "react-bootstrap";
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
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Route path="/homepage" component={Signup} />
                <Route path="/login" component={Login} />
              </div>
            </Container>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default Homepagelayout;
