import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PreparationCards = ({ imageSrc, header, subHeader, description, className, datas }) => {
  const [accordion, setAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };
  return (
    <div className={className}>
      <div className="card-left">
        <div className="card-img">
          <Image src={imageSrc} alt={"Card"} />
        </div>
        <h2>{header}</h2>
      </div>
      <div className="card-right">
        <div className="card-right-context">
          {datas.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className={accordion === index ? "card-header card-header-active" : "card-header"}>
                <h3 className={accordion === index ? "active-color" : "no-active-color"}>{item.name}</h3>
                <p className={accordion === index ? "active" : "no-active"}>
                  Consectetur nunc tincidunt pretium facilisi blandit commodo, sit cursus purus.
                </p>
                <div className="link">
                  <Link href={item.link}>
                    <a className={accordion === index ? "active-link" : "no-active-link"}>Ətraflı</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="card-header">
            <h3>{subHeader}</h3>
            <p>{description}</p>
            <Link href={link}>Ətraflı</Link>
          </div>
          <div className="card-about-subject">
            <ul>
              <li>Java Proqramlaşdırma</li>
              <li>SQL Proqramlaşdırma</li>
              <li>Python Proqramlaşdırma</li>
              <li>.Net Proqramlaşdırma</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PreparationCards;
