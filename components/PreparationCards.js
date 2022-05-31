import React from "react";
import Image from "next/image";
import Link from "next/link";

const PreparationCards = ({ imageSrc, header, subHeader, description, className }) => {
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
          <div className="card-header">
            <h3>{subHeader}</h3>
            <p>{description}</p>
            <Link href={"#"}>Ətraflı</Link>
          </div>
          <div className="card-about-subject">
            <ul>
              <li>Java Proqramlaşdırma</li>
              <li>SQL Proqramlaşdırma</li>
              <li>Python Proqramlaşdırma</li>
              <li>.Net Proqramlaşdırma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationCards;
