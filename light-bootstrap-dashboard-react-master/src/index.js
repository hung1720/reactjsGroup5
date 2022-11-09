import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import Homepagelayout from "pages/Homepage/Homepage.js";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={() => <AdminLayout />} />
        <Route
          path="/homepage"
          render={(props) => <Homepagelayout {...props} />}
        />
        <Redirect from="/" to="/homepage" />
      </Switch>
    </BrowserRouter>
  </Provider>
);
