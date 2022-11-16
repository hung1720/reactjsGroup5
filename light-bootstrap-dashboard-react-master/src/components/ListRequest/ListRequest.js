import React, { useState } from "react";
import { useAPi } from "./useApi";
import "./ListRequestMentee.css";
import { Container } from "react-bootstrap";
const URL = "https://6331a1443ea4956cfb635d5f.mockapi.io/api/test/tableSlot";
const ListRequestMenteeTable = () => {
  const { data, removeData } = useAPi(URL);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const handClick = (selectedId) => {
    const selectedRec = data.find((val) => val.TaskID === selectedId);
    setSelectedData(selectedRec);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const yourHandler = (event, currentItem, totalForRow) => {
    console.log(currentItem);
  };
  const renderHeader = () => {
    let headerElement = ["name_mentee", "Start", "End", "Status", "Delete"];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const renderBody = () => {
    return (
      data &&
      data.map(({ TaskID, name_mentor, Start, End, status }) => {
        // Xử lý ngày tháng
        const parseAdjust = (eventDate) => {
          const date = new Date(eventDate);
          date.setFullYear(currentYear);
          return date;
        };
        const currentYear = new Date().getFullYear();
        let dateStart = parseAdjust(Start).toLocaleString("en-UK");
        let dateEnd = parseAdjust(End).toLocaleString("en-UK");
        return (
          <>
            <tr key={TaskID} onClick={() => handClick(TaskID)}>
              <td>{name_mentor}</td>
              <td>{dateStart}</td>
              <td>{dateEnd}</td>
              <td
                key={TaskID}
                className={
                  status === true
                    ? "operation statusTrue"
                    : status === false
                    ? "operation statusFalse"
                    : "Error"
                }
              >
                {String(status)}
              </td>
              <td className="operation">
                <button
                  className="buttonDelete"
                  onClick={() => removeData(TaskID)}
                  onChange={refreshPage}
                >
                  Delete
                </button>
              </td>
            </tr>
          </>
        );
      })
    );
  };
  const Modal = ({ handleClose, details }) => {
    console.log(details);
    return <div className="modal display-block">Hello</div>;
  };
  return (
    <>
      <Container>
        <h1 id="title">List Request</h1>
        <table id="employee">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
        {show && <Modal details={selectedData} handleClose={hideModal} />}
      </Container>
    </>
  );
};
export default ListRequestMenteeTable;
