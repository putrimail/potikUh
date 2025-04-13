import { useState } from "react";
import "./App.css";
import LogoPojok from "./assets/logoPojok.png";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaGoogleDrive,
} from "react-icons/fa6";
function App() {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center min-vh-100">
          <div
            className="col-md-6 text-white p-3"
            style={{ backgroundColor: "#ABD5DD" }}
          >
            <div className="text-center  ">
              <img src={LogoPojok} alt="mael" className="blink w-75" />
            </div>
            <hr className="text-dark" />
            <marquee className="text-dark" direction="left">
              Layanan Pojok Statistik * Konsultasi Data * Data Statistik
            </marquee>
            <hr className="text-dark" />

            <div className="text-center pt-5">
              <Option
                logo={<FaInstagram />}
                text="Instagram"
                link="https://www.instagram.com/potik.hamzanwadi?igsh=Y3F2MTFwbjRkejdq"
              />
              <Option
                logo={<FaTiktok />}
                text="Tik Tok"
                link="https://www.tiktok.com/@potik.hamzanwadi?_t=ZS-8vU7I43NjDs&_r=1"
              />
              <Option
                logo={<FaYoutube />}
                text="YouTube"
                link="https://www.youtube.com/@potikhamzanwadi"
              />
              <Option
                logo={<FaGoogleDrive />}
                text="Infografis"
                link="https://drive.google.com/drive/folders/1-9ms6__PWQ9FH3Lt_TexxSs0B530Ayb3"
              />
            </div>
          </div>
        </div>
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
    </>
  );
}

export default App;

function Option({ logo, text, link }) {
  return (
    <a
      href={link}
      target="new_blank"
      className="text-decoration-none text-dark"
    >
      <div
        className="btn-group w-75 mt-3"
        style={{ border: "1px solid #686868", opacity: "0.8" }}
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn  ">
          <span className="fs-3">{logo}</span>
        </button>
        <button type="button" className="btn  w-100">
          {text}
        </button>
      </div>
    </a>
  );
}
