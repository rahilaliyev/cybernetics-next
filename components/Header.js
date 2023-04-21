import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/LogoWhite.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { az } from "../locales/az";
import { en } from "../locales/en";
import { ru } from "../locales/ru";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "az" ? az : locale === "en" ? en : ru;

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
  }, []);

  function handleChangeLanguage(locale) {
    router.push(router.pathname, router.pathname, { locale });
  }
  return (
    <header
      className={
        scrollPosition > 200 ? "header-fixed" : scrollPosition > 100 ? "header-top" : "header-absolute"
      }
    >
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
              <ul className="dropdown">
                <li>
                  <Link href="/education/preparation">Peşəkar mütəxəssis hazırlığı</Link>
                </li>
                <li>
                  <Link href="/education/training">Korporativ təlimlər</Link>
                </li>
                <li>
                  <Link href="/education/academic-activity">Akademik fəaliyyət</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"#"}> Xidmətlər </Link>
            </li>
            <li>
              <Link href="/sislat"> Sislat </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/si/preparation">Peşəkar mütəxəssis hazırlığı</Link>
                </li>
                <li>
                  <Link href="/education/training">Korporativ təlimlər</Link>
                </li>
                <li>
                  <Link href="/education/academic-activity">Akademik fəaliyyət</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/about"}>
                <a>{t.about} </a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a> {t.contact} </a>
              </Link>
            </li>
          </ul>
          <div className="language">
            <span>{locale.toUpperCase()}</span>
            <div className="dropdown">
              <button onClick={() => handleChangeLanguage("az")}>AZ</button>
              <button onClick={() => handleChangeLanguage("en")}>EN</button>
              <button onClick={() => handleChangeLanguage("ru")}>RU</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
