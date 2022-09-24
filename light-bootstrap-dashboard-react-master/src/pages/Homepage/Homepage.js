import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "pages/Modals/Modal.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "assets/css/homepage.css";

function Homepagelayout() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="homepage-container">
        <Button
          variant="secondary"
          size="lg"
          className="button-signin"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Sign in
        </Button>

        {openModal && <Modal closeModal={setOpenModal} />}
        <Button variant="secondary" size="lg" className="button-createaccount">
          Create account
        </Button>
      </div>
    </>
  );
}

export default Homepagelayout;
