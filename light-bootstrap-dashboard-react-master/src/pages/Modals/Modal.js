import React from "react";
import "assets/css/modal.css";
function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="body">
          <label>Tên Người Dùng</label>
          <input type="text" name="" />
        </div>
        <div className="body">
          <span>Mật Khẩu</span>
          <input type="password" name="" />
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Canel
          </button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
