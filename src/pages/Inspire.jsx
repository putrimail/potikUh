import React from "react";
import Option from "../components/Option";
import Footer from "../components/Footer";
import { logos } from "../Logo/Logo";

function Inspire() {
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
            <h2>INSPIRE</h2>
          </div>
          <div className="text-center ">
            <Option
              logo={<logos.meet />}
              text="ZOOM"
              link="https://telkomsel.zoom.us/j/94903526876?pwd=RVh2ehMbYXxai46h4VBaMm1IuURF1A.1"
            />
            <Option
              logo={<logos.cekin />}
              text="ABSENSI"
              link="https://webapps.bps.go.id/daftarhadir/#/go/cu9qa"
            />
            <Option
              logo={<logos.serifikat />}
              text="SERTIFIKAT"
              link="https://drive.google.com/drive/folders/11jQ6RUVTIOSDSLaBMop3Pj_kPm9L_27N?usp=sharing"
            />
            {/* <Option logo={<logos.drive />} text="DOKUMENTASI" link="" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inspire;
