import React from "react";
import Image from "next/image";
import Logo from "../public/LogoWhite.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header-context container">
        <div className="logo">
          <Image src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link href={"#"}> Təlim-Tədris </Link>
            </li>
            <li>
              <Link href={"#"}> Xidmətlər </Link>
            </li>
            <li>
              <Link href={"#"}> Sislat </Link>
            </li>
            <li>
              <Link href={"#"}> Haqqımızda </Link>
            </li>
            <li>
              <Link href={"#"}> Əlaqə </Link>
            </li>
          </ul>
          <div className="language">
            <span>AZ</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
