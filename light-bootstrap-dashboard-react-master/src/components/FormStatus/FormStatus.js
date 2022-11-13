import React, { useState, useEffect } from "react";

const ScheduleMentorPage = (props) => {
  const initialFieldValues = {
    nameMentor: "",
    phone: "",
    description: "",
    status: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-spinner fa-spin fa-1x fa-fw"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Status"
          name="status"
          value={values.status}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};
export default ScheduleMentorPage;
