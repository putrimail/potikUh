import React from "react";

function Footer() {
  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="col-md-6"
          style={{ backgroundColor: " #ABD5DD", opacity: "0.8" }}
        >
          <footer className="text-center text-dark ">
            <small>
              &copy; {new Date().getFullYear()} Pojok Statistik Hamzanwadi.
              Created by msicode
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
