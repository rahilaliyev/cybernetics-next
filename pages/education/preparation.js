import React from "react";
import EducationHeader from "../../components/EducationHeader";
import EducationHeaderTop from "../../components/EducationHeaderTop";
import PreparationCards from "../../components/PreparationCards";
import CodePng from "../../public/code.png";
import ConnectPng from "../../public/connect.png";
import DigitalPng from "../../public/digital.png";
import CyberPng from "../../public/cyber.png";

const Preparation = () => {
  return (
    <main className="preparation">
      <section className="preparation-section">
        <EducationHeaderTop text={"Peşəkar mütəxəssis hazırlığı"} />
      </section>
      <EducationHeader
        sectionHeaderText={"Peşəkar mütəxəssis hazırlığı nədir?"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed massa integer ut venenatis. Sit pellentesque pretium, purus orci. Eu in metus, pharetra sed lectus et, purus, enim in. Massa sit scelerisque sit morbi vitae nulla ut suspendisse vel. Malesuada porta diam porta aenean ipsum lectus arcu. Cursus in porta semper nullam. Semper sed arcu molestie sit elementum lacus. Tincidunt lorem tristique viverra quam elit, suspendisse. Nec id quis odio proin maecenas et in malesuada scelerisque. Volutpat adipiscing nibh elit morbi massa netus felis purus. Mauris sed elementum ut quis suspendisse egestas consequat sit scelerisque. Risus, netus risus sit tellus neque, nibh. Id egestas tortor pellentesque tellus est cursus vitae, phasellus. Malesuada malesuada auctor nunc et pulvinar faucibus et. Nullam tortor elementum turpis pulvinar ut suspendisse sed senectus arcu. Volutpat dui, placerat eros et urna pellentesque. Ut phasellus ornare volutpat varius ornare."
        }
      />
      <div className="preparation-line"></div>
      <section className="preparation-cards">
        <PreparationCards
          imageSrc={CodePng}
          header={"Proqramlaşdırma kursları"}
          subHeader={"Web Proqramlaşdırma"}
          description={"Consectetur nunc tincidunt pretium facilisi blandit commodo, sit cursus purus.  "}
          className="card"
        />
        <PreparationCards
          imageSrc={ConnectPng}
          header={"Şəbəkə və Sistem İnzibatçılığı"}
          subHeader={"Web Proqramlaşdırma"}
          description={"Consectetur nunc tincidunt pretium facilisi blandit commodo, sit cursus purus.  "}
          className="card-reverse"
        />
        <PreparationCards
          imageSrc={DigitalPng}
          header={"Rəqəmsal Ekspertiza"}
          subHeader={"Web Proqramlaşdırma"}
          description={"Consectetur nunc tincidunt pretium facilisi blandit commodo, sit cursus purus.  "}
          className="card"
        />
        <PreparationCards
          imageSrc={CyberPng}
          header={"Kiber təhlükəsizlik"}
          subHeader={"Web Proqramlaşdırma"}
          description={"Consectetur nunc tincidunt pretium facilisi blandit commodo, sit cursus purus.  "}
          className="card-reverse"
        />
      </section>
    </main>
  );
};

export default Preparation;
