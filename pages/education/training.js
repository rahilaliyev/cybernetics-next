import React from "react";
import EducationHeader from "../../components/EducationHeader";
import EducationHeaderTop from "../../components/EducationHeaderTop";
import Cloud1 from "../../public/cloud1.png";
import Cloud2 from "../../public/cloud2.png";
import CloudCard from "../../public/cloud-card.png";
import Image from "next/image";
import Link from "next/link";

const Training = () => {
  return (
    <main>
      <section className="trainingPage">
        <EducationHeaderTop text={"Korporativ Təlimlər"} />
      </section>
      <EducationHeader
        sectionHeaderText={"Korporativ Təlimlər nədir?"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed massa integer ut venenatis. Sit pellentesque pretium, purus orci. Eu in metus, pharetra sed lectus et, purus, enim in. Massa sit scelerisque sit morbi vitae nulla ut suspendisse vel. Malesuada porta diam porta aenean ipsum lectus arcu. Cursus in porta semper nullam. Semper sed arcu molestie sit elementum lacus. Tincidunt lorem tristique viverra quam elit, suspendisse. Nec id quis odio proin maecenas et in malesuada scelerisque. Volutpat adipiscing nibh elit morbi massa netus felis purus. Mauris sed elementum ut quis suspendisse egestas consequat sit scelerisque. Risus, netus risus sit tellus neque, nibh. Id egestas tortor pellentesque tellus est cursus vitae, phasellus. Malesuada malesuada auctor nunc et pulvinar faucibus et. Nullam tortor elementum turpis pulvinar ut suspendisse sed senectus arcu. Volutpat dui, placerat eros et urna pellentesque. Ut phasellus ornare volutpat varius ornare."
        }
      />
      <section className="trainingSection">
        <div className="traningSection-context container">
          <div className="traning-cards">
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
            <div className="card">
              <div className="cloud-left">
                <Image src={Cloud1} alt="Cloud" />
              </div>
              <div className="cloud-right">
                <Image src={Cloud2} alt="Cloud" />
              </div>

              <div className="card-icon">
                <Image src={CloudCard} alt="cloud" />
                <h3>Bulud inzibatçısı</h3>
              </div>
              <div className="card-info">
                <div className="left">
                  <h6>KURSUN MÜDDƏTI</h6>
                  <span>120 saat, 48 dərs </span>
                </div>
                <div className="right">
                  <h6>KURSUN VAXTI</h6>
                  <span>həftədə 2 dəfə</span>
                </div>
              </div>
              <Link href="#">Ətraflı</Link>
            </div>{" "}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Training;
