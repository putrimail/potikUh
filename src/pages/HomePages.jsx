import Footer from "../components/Footer";
import Option from "../components/Option";
import { logos } from "../Logo/Logo";
function HomePages() {
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

          <div className="text-center pt-5">
            <Option
              logo={<logos.instagram />}
              text="INSTAGRAM"
              link="https://www.instagram.com/potik.hamzanwadi?igsh=Y3F2MTFwbjRkejdq"
            />
            <Option
              logo={<logos.tiktok />}
              text="TIKTOK"
              link="https://www.tiktok.com/@potik.hamzanwadi?_t=ZS-8vU7I43NjDs&_r=1"
            />
            <Option
              logo={<logos.youtube />}
              text="YOU TUBE"
              link="https://www.youtube.com/@potikhamzanwadi"
            />
            <Option
              logo={<logos.drive />}
              text="INFOGRAFIS"
              link="https://drive.google.com/drive/folders/1-9ms6__PWQ9FH3Lt_TexxSs0B530Ayb3"
            />
            <Option
              logo={<logos.folder />}
              text="DOKUMENTASI"
              link="https://drive.google.com/drive/folders/1ghbN_7FQIU7D3oquq1sGwv_2-tJUymq_"
            />
            <Option
              logo={<logos.waves />}
              text="STATWAVES"
              link="https://linktree-potik-uh.vercel.app/statwaves"
            />
            <Option
              logo={<logos.waves />}
              text="ISPIRE"
              link="https://linktree-potik-uh.vercel.app/inspire"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePages;
