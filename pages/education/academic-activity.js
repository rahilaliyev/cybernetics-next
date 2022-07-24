import Image from "next/image";
import React from "react";
import EducationHeader from "../../components/EducationHeader";
import EducationHeaderTop from "../../components/EducationHeaderTop";
import OxfordLogo from "../../public/oxford-logo.png";
import Bmu from "../../public/Bmu.png";
import BmuLogo from "../../public/bmu-logo.png";
import Medal from "../../public/medal.svg";
import Heat from "../../public/academic-heat-svg.svg";

const AcademicActivity = () => {
  return (
    <main>
      <section className="academicActivity">
        <EducationHeaderTop text={"Akademik fəaliyyət"} />
      </section>
      <EducationHeader
        sectionHeaderText={"Akademik fəaliyyət nədir?"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed massa integer ut venenatis. Sit pellentesque pretium, purus orci. Eu in metus, pharetra sed lectus et, purus, enim in. Massa sit scelerisque sit morbi vitae nulla ut suspendisse vel. Malesuada porta diam porta aenean ipsum lectus arcu. Cursus in porta semper nullam. Semper sed arcu molestie sit elementum lacus. Tincidunt lorem tristique viverra quam elit, suspendisse. Nec id quis odio proin maecenas et in malesuada scelerisque. Volutpat adipiscing nibh elit morbi massa netus felis purus. Mauris sed elementum ut quis suspendisse egestas consequat sit scelerisque. Risus, netus risus sit tellus neque, nibh. Id egestas tortor pellentesque tellus est cursus vitae, phasellus. Malesuada malesuada auctor nunc et pulvinar faucibus et. Nullam tortor elementum turpis pulvinar ut suspendisse sed senectus arcu. Volutpat dui, placerat eros et urna pellentesque. Ut phasellus ornare volutpat varius ornare."
        }
      />
      <section className="academicSection">
        <div className="academicSection-context container">
          <div className="academic-university">
            <div className="uni-card">
              <Image src={OxfordLogo} alt="Logo" />
              <div className="text-context">
                <h6>Təlimlər</h6>
                <div className="lists">
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="uni-card">
              <Image src={OxfordLogo} alt="Logo" />
              <div className="text-context">
                <h6>Təlimlər</h6>
                <div className="lists">
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="uni-card">
              <Image src={OxfordLogo} alt="Logo" />
              <div className="text-context">
                <h6>Təlimlər</h6>
                <div className="lists">
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                  <ol>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Autocad</li>
                    <li>3ds Max</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="academic-winner">
            <h1>BMU Qrant Qalibi</h1>
            <div className="winner-container">
              <div className="winner-img">
                <Image src={Bmu} alt="Bmu" />
              </div>
              <div className="winner-logo">
                <Image src={BmuLogo} alt="logo" />
              </div>
            </div>
            <p>
              Ali təhsilin bütün səviyyələri üzrə mühəndis kadrlarının hazırlığını, fundamental və tətbiqi elmi tədqiqatlar aparan qabaqcıl ali təhsil
              müəssisəsidir
            </p>
          </div>
          <div className="academic-apply">
            <div className="medal">
              <Image src={Medal} alt="medal" />
            </div>
            <div className="heat">
              <Image src={Heat} alt="heat" />
            </div>
            <button type="button">Təlim üçün müraciət et </button>
          </div>
        </div>
      </section>
      {/* <Form /> */}
    </main>
  );
};

export default AcademicActivity;
