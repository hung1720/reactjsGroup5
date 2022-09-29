import axios from "react";

import React, { Component } from "react";
import "./style.css";

class App extends Component {
  state = {
    selectedFile: null
  };
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);

    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose Image </h4>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="RegisterBox">
        <h1>Regeister page</h1>
        <div>
          <label>
            First name:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Change your image and Upload
          </button>
        </div>
        {this.fileData()}
        <button className="register" type="submit" label="submit">
          {" Register "}
        </button>
      </div>
    );
  }
}

export default App;
