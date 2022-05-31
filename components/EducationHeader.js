import React from "react";

const EducationHeader = ({  sectionHeaderText, paragraph }) => {
  return (
    <>
      <div className="section-info container">
        <h1>{sectionHeaderText}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default EducationHeader;
