import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AddForm from "./AddForm";
import { useState } from "react";
import MentorslotPageTable from "components/MentorSlotPage/MentorSlotPageTable";
import "@progress/kendo-theme-default/dist/all.css";
function MentorSlotPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <header>
        {/* <Button onClick={handleShow} variant="outline-success">
          Create slot
        </Button> */}
        <MentorslotPageTable />
      </header>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title></Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
export default MentorSlotPage;
