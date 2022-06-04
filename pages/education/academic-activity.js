import React from "react";
import EducationHeader from "../../components/EducationHeader";
import EducationHeaderTop from "../../components/EducationHeaderTop";
import Form from "../../components/Form";
import PriceCards from "../../components/PriceCards";

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
          <div className="academic-price">
            <PriceCards
              header="Sərfəli"
              headerText="Dolor scelerisque blandit nascetur bibendum nec."
              price="$49"
              info="Dolor scelerisque blandit "
            />
            <PriceCards
              header="Populyar"
              headerText="Dolor scelerisque blandit nascetur bibendum nec."
              price="$69"
              info="Dolor scelerisque blandit "
            />
            <PriceCards
              header="Standart"
              headerText="Dolor scelerisque blandit nascetur bibendum nec."
              price="$79"
              info="Dolor scelerisque blandit "
            />
          </div>
        </div>
      </section>
      <Form />
    </main>
  );
};

export default AcademicActivity;
