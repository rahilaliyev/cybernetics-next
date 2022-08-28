import React from "react";
import Image from "next/image";
import DateIcon from "../../../public/date.svg";
import TimeIcon from "../../../public/time.svg";
import Connect1 from "../../../public/connect1.png";
import Connect2 from "../../../public/connect2.png";
import Connect3 from "../../../public/connect3.png";
import Connect4 from "../../../public/connect4.png";
import Form from "../../../components/Form";

const CloudAdministrator = () => {
  return (
    <main>
      <section className="trainingDetail">
        <div className="trainingDetail-container container">
          <div className="trainingDetail-header">
            <div className="left">
              <h1>Bulud inzibatçısı</h1>
              <p>Proqramlaşdırma</p>
              <div className="time-and-dates">
                <div className="time">
                  <div className="icon">
                    <Image src={DateIcon} alt="Date" />
                  </div>
                  <div className="info">
                    <span>Kursun müddəti</span>
                    <span>2 ay (16 dərs)</span>
                  </div>
                </div>
                <div className="date">
                  <div className="icon">
                    <Image src={TimeIcon} alt="Time" />
                  </div>
                  <div className="info">
                    <span>Kursun vaxtı</span>
                    <span>20:00-21:30 - həftə içi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="button-wrapper">
                <div className="connect1">
                  <Image src={Connect1} alt="connect" />
                </div>
                <div className="connect2">
                  <Image src={Connect2} alt="connect" />
                </div>
                <div className="connect3">
                  <Image src={Connect3} alt="connect" />
                </div>
                <div className="connect4">
                  <Image src={Connect4} alt="connect" />
                </div>
                <button>Kursa yazıl</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trainingDetail-info">
        <div className="trainingDetail-info-container container">
          <h2>Kurs haqqında</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed massa integer ut venenatis. Sit pellentesque pretium, purus orci. Eu
            in metus, pharetra sed lectus et, purus, enim in. Massa sit scelerisque sit morbi vitae nulla ut suspendisse vel. Malesuada porta diam
            porta aenean ipsum lectus arcu. Cursus in porta semper nullam. Semper sed arcu molestie sit elementum lacus. Tincidunt lorem tristique
            viverra quam elit, suspendisse. Nec id quis odio proin maecenas et in malesuada scelerisque. Volutpat adipiscing nibh elit morbi massa
            netus felis purus. Mauris sed elementum ut quis suspendisse egestas consequat sit scelerisque. Risus, netus risus sit tellus neque, nibh.
            Id egestas tortor pellentesque tellus est cursus vitae, phasellus. Malesuada malesuada auctor nunc et pulvinar faucibus et. Nullam tortor
            elementum turpis pulvinar ut suspendisse sed senectus arcu. Volutpat dui, placerat eros et urna pellentesque. Ut phasellus ornare volutpat
            varius ornare.
          </p>
          <div className="trainingDetail-info-cards">
            <div className="card">
              <div className="up">
                <span>Təlim səviyyəsi</span>
              </div>
              <div className="down">
                <span>Başlanğıc</span>
              </div>
            </div>
            <div className="card">
              <div className="up">
                <span>Təlim müddəti</span>
              </div>
              <div className="down">
                <span>6 ay</span>
              </div>
            </div>
            <div className="card">
              <div className="up">
                <span>İlkin şərtlər</span>
              </div>
              <div className="down">
                <span>Şəbəkə biliyi</span>
              </div>
            </div>
            <div className="card">
              <div className="up">
                <span>Sertifikat</span>
              </div>
              <div className="down">
                {" "}
                <span>SİSLAT Sertifikatı</span>
              </div>
            </div>
          </div>
          <div className="trainingDetail-learning">
            <h2>Nə öyrənəcəksiz?</h2>
            <div className="trainingDetail-learning-cards">
              <div className="card">Dictumst tronus</div>
              <div className="card">Et justo aliquet id.</div>
              <div className="card">Nunc molestie ac.</div>
              <div className="card">Velit odio nibh sed.</div>
              <div className="card">Dictumst tronus</div>
              <div className="card">Et justo aliquet id.</div>
              <div className="card">Nunc molestie ac.</div>
              <div className="card">Velit odio nibh sed.</div>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </main>
  );
};

export default CloudAdministrator;
