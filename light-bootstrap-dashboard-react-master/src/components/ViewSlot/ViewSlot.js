import FormStatus from "components/FormStatus/FormStatus";
import React, { useState, useEffect } from "react";
import app from "firebase.js";
const createSlot = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");
  const a = ["user", "user2"];
  const b = "user";

  useEffect(() => {
    app.child("user").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
      else setContactObjects({});
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      app.child("user").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      app.child(`user/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      debugger;
      app.child(`user/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">View Slot for mentee</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <FormStatus {...{ addOrEdit, currentId, contactObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name Mentor</th>
                <th>Phone</th>
                <th>Description</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].nameMentor}</td>
                    <td>{contactObjects[id].phone}</td>
                    <td>{contactObjects[id].description}</td>
                    <td>{contactObjects[id].status}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default createSlot;
