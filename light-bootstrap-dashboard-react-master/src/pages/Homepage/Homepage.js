import React from "react";
import Button from "react-bootstrap/Button";

import "assets/css/homepage.css";

function LoginLayout() {
  return (
    <>
      <div className="homepage-container">
        <Button variant="Dark" size="lg" className="button-signin">
          Sign in
        </Button>
        <Button variant="secondary" size="lg" className="button-createaccount">
          Create account
        </Button>
      </div>
    </>
  );
}

export default LoginLayout;
