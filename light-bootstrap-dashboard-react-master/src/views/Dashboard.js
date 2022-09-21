import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Cộng</Link>
          </li>
          <li>
            <Link to="/login">Trừ</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/tru"
            render={() => {
              return localStorage.getItem("accessToken") ? (
                <Tru />
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmitPlus = (event) => {
    event.preventDefault();
    let c = Number(inputs.a) + Number(inputs.b);
    alert(c);
  };
  return (
    <div>
      <form>
        <label>
          Enter a:
          <input
            type="number"
            name="a"
            value={inputs.a || ""}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br></br>
        <label>
          Enter b:
          <input
            type="number"
            name="b"
            value={inputs.b || ""}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br></br>
        <button
          onClick={handleSubmitPlus}
          type="submit"
          className="btn btn-info"
        >
          +
        </button>
      </form>
    </div>
  );
}

function Login() {
  let history = useHistory();
  let login = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/tru");
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
function Tru() {
  let history = useHistory();
  let logout = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/tru");
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmitMinus = (event) => {
    event.preventDefault();
    let c = Number(inputs.a) - Number(inputs.b);
    alert(c);
  };
  return (
    <div>
      <form>
        <label>
          Enter a:
          <input
            type="number"
            name="a"
            value={inputs.a || ""}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br></br>
        <label>
          Enter b:
          <input
            type="number"
            name="b"
            value={inputs.b || ""}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br></br>
        <button
          onClick={handleSubmitMinus}
          type="submit"
          className="btn btn-info"
        >
          -
        </button>
        <button onClick={logout}>Logout</button>
      </form>
    </div>
  );
}
