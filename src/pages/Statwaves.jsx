import React from "react";
import Option from "../components/Option";
import Footer from "../components/Footer";
import { logos } from "../Logo/Logo";

function Statwaves() {
  return (
    <div className="container ">
      <div className="row justify-content-center min-vh-100">
        <div
          className="col-md-6 text-white p-3"
          style={{ backgroundColor: "#ABD5DD" }}
        >
          <div className="text-center  ">
            <img src={logos.logoPojok} alt="mael" className="blink w-75" />
          </div>
          <hr className="text-dark" />
          <marquee className="text-dark" direction="left">
            Layanan Pojok Statistik * Konsultasi Data * Data Statistik
          </marquee>
          <hr className="text-dark" />
          <div className="text-center text-black fw-bold pt-3">
            <h2>STATWAVES</h2>
          </div>
          <div className="text-center ">
            <Option logo={<logos.meet />} text="ZOOM" link="" />
            <Option logo={<logos.serifikat />} text="SERTIFIKAT" link="" />
            <Option logo={<logos.drive />} text="DOKUMENTASI" link="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Statwaves;
