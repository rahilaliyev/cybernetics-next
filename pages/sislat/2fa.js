import React from "react";
import SislatLogo from "../../public/sislat-page-logo.svg";
import SislatTvIcon from "../../public/sislat-tv-icon.svg";
import OkIcon from "../../public/ok-icon-green.svg";
import Image from "next/image";
import Sislat2fa from "../../public/sislat-2fa.PNG";
import VpnVideo from "../../public/animation1.mp4";

const Sislat2Fa = () => {
  return (
    <>
      <section className="firewall fa">
        <div className="firewall-container container">
          <div className="sislat-header">
            <div className="left">
              <Image src={SislatLogo} alt="sislat-logo" className="sislat-logo" />
              <h4>Sislat 2FA</h4>
              <p>
                VPN bağlantıları için tanımlı kullanıcı telefonuna SMS ile PIN göndererek veya Google
                Authenticator ile 2. bir doğrulama sağlıyoruz..
              </p>
              <button className="demo">Demo tələb et</button>
            </div>
            <div className="right">
              <Image src={Sislat2fa} alt="sislat 2fa" />
            </div>
          </div>
          <div className="sislat-table-lists">
            <div className="table-header">
              <Image src={SislatTvIcon} alt="tv" />
              <h4>Detaylı Bilgi</h4>
            </div>
            <div className="table-lists">
              <ul>
                <li>
                  <Image src={OkIcon} alt="icon" /> <span className="text"> SMS ile doğrulama</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> Yerel kullanıcı hesapları kullanabilme</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> Şifre denemelerine karşı koruma (brute-force attacks)</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" /> <span className="text"> LDAP ile kimlik doğrulama</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> LDAP Security grup ile yetkilendirme</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" /> <span className="text"> Gelişmiş Raporlama</span>
                </li>
              </ul>
              <ul>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> Google Authenticator ile doğrulama</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> Gerçek zamanlı koruma sağlama</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> Her bağlantı isteği için yeni kod üretimi</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> LDAP tan otomatik telefon çekme</span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" />{" "}
                  <span className="text"> SMS sağlayıcılar ile kolay entegrasyon </span>
                </li>
                <li>
                  <Image src={OkIcon} alt="icon" /> <span className="text">Detaylı Bilgi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="animations">
        <div className="container">
          <div className="left">
            <h3>Daha Güvenli VPN Erişimleri</h3>
            <p>
              Coslat 2FA ile VPN bağlantısını iki aşamalı kimlik doğrulamaya tabi tutarak daha güvenli vpn
              erişimleri sağlamaktadır.
            </p>
          </div>
          <div className="right">
            <video src={VpnVideo} loop muted autoPlay></video>
          </div>
        </div>
        <div className="container">
          <div className="left">
            <h3>Daha Güvenli VPN Erişimleri</h3>
            <p>
              Coslat 2FA ile VPN bağlantısını iki aşamalı kimlik doğrulamaya tabi tutarak daha güvenli vpn
              erişimleri sağlamaktadır.
            </p>
          </div>
          <div className="right">
            <video src={VpnVideo} loop muted autoPlay></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sislat2Fa;
