import React from "react";
import { idText } from "typescript";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", this.state.username);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("", requestOptions) // Thêm API login vào đây!!!!
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("accessToken", result.accessToken);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Usernamem password are wrong");
      });
  };
  render() {
    return (
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.setParams}></input>
        </div>
        <div>
          <label>Username:</label>
          <input
            type="password"
            name="password"
            onChange={this.setParams}
          ></input>
        </div>
        <div>
          <button type="button" onClick={this.login}>
            Login
          </button>
        </div>
      </form>
    );
  }
}
