import React from "react";
import Link from "next/link";
import Image from "next/image";
import FbLogo from "../public/carbon_logo-facebook.png";
import TwitterLogo from "../public/carbon_logo-twitter.png";
import YoutubeLogo from "../public/carbon_logo-youtube.png";
import InstaLogo from "../public/carbon_logo-instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-context container">
        <div className="lists">
          <ul>
            <h4>Təlim tədris</h4>
            <li>
              <Link href={"#"}>Peşəkar mütəxəssis hazırlığı</Link>
            </li>
            <li>
              <Link href={"#"}>Korporativ Təlimlər</Link>
            </li>
            <li>
              <Link href={"#"}>Akademik fəaliyyət</Link>
            </li>
          </ul>
          <ul>
            <h4>Xidmətlər</h4>
            <li>
              <Link href={"#"}>Nüfuzetmə testi</Link>
            </li>
            <li>
              <Link href={"#"}>İT&amp Şəbəkə arxitekturası</Link>
            </li>
            <li>
              <Link href={"#"}>İT dəstək</Link>
            </li>
          </ul>
          <ul>
            <h4>Sislat</h4>
            <li>
              <Link href={"#"}>Sislat Firewall</Link>
            </li>
            <li>
              <Link href={"#"}>Sislat Hotspot</Link>
            </li>
            <li>
              <Link href={"#"}>Sislat 2FA</Link>
            </li>
          </ul>
          <ul>
            <h4>Əlaqə</h4>
            <li>
              <Link href={"#"}>(+994) 70-700-70-70</Link>
            </li>
            <li>
              <Link href={"#"}>(+994) 70-700-70-70</Link>
            </li>
            <li>
              <Link href={"#"}>(+994) 70-700-70-70</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={"#"}>
                <Image src={FbLogo} alt="Fb logo" />
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"#"}>
                <Image src={InstaLogo} alt="Fb logo" />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={YoutubeLogo} alt="Fb logo" />
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"#"}>
                <Image src={TwitterLogo} alt="Fb logo" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">© 2021 Cybernetics MMC</div>
      </div>
    </footer>
  );
};

export default Footer;
