import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/LogoWhite.svg";
import Link from "next/link";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
  }, []);

  return (
    <header className={scrollPosition > 200 ? "header-fixed" : scrollPosition > 100 ? "header-top" : "header-absolute"}>
      <div className="header-context container">
        <Link href={"/"}>
          <div className="logo">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
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
              <Link href={"/about"}>
                <a>Haqqımızda</a>
              </Link>
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
