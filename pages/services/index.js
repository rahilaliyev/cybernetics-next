import Image from "next/image";
import React from "react";
import Logo from "../../public/SislatLogo.png";
import SislatWall from "../../public/sislat-wall-image.png";
import SislatHotspot from "../../public/Sislat-index-hotspot.svg";
import SislatCoslat from "../../public/sislat-index-coslat.png";
import Link from "next/link";

const Sislat = () => {
  const cardData = [
    {
      header: "Giriş (15,30,50)",
      p: "50 kullanıcıya kadar işletmeleriniz için gelişmiş güvenlik duvarı özelliklerini üzerinde barından donanım çözümleridir.",
    },
    {
      header: "Küçük-Orta (70,100)",
      p: "100 kullanıcıya kadar performans sağlayan ve gelişmiş güvenlik duvarı özelliklerine sahip donanım çözümleridir.",
    },
    {
      header: "Orta (200,300)",
      p: "İşletmeniz için gelişmiş güvenlik duvarı özelliklerini 300 kullanıcıya kadar destekleyen donanım çözümleridir.",
    },
    {
      header: "Üst (500 ve üzeri)",
      p: "500 ve üzeri kullanıcıya sahip işletmeniz için performans ve tüm gereksinimleri sunan donanım çözümleridir.",
    },
  ];
  return (
    <main>
      <section className="sislat-index">
        <div className="sislat-container container">
          <div className="sislat-logo">
            <h1>Xidmətlər</h1>
          </div>
        </div>
      </section>
      <section className="sislat-text">
        <div className="sislat-text-container container">
          <h3>Siber tehditlere karşı kuralları birlikte belirleyelim.</h3>
          <p>
            Müşteri memnuniyetini ön planda tutan, insan odaklı yaklaşımı benimsemiş ekibimiz ile size
            yardımcı olmaya hazırız.
          </p>
        </div>
      </section>
      <section className="sislat-index-wall">
        <div className="sislat-index-wall-container container">
          <div className="left">
            <h3>Nüfuzetmə testi</h3>
            <p>
              Giderek karmaşıklaşan güvenlik tehditlerinden korkmayın! Coslat, gelişmiş güvenlik duvarı
              özellikleri ile siber tehditlere karşı yanınızda.
            </p>
            <ul>
              <li>Türkçe web arayüz</li>
              <li>TC Kimlik Doğrulama ve SMS ile Kayıt</li>
              <li>URL ve içerik filtreleme</li>
              <li>Sertifikasız smart HTTPS filtreleme</li>
              <li>Trafik şekillendirme ve limitleme</li>
              <li>Yük dengeleme ve yük aktarma</li>
              <li>VPN desteği (IPSec, OpenVPN, L2TP, PPTP)</li>
              <li>5651 loglama</li>
            </ul>
          </div>
          <div className="right">
            <Image src={SislatWall} alt="Sislat Firewall Image" />
          </div>
        </div>
      </section>
      <section className="sislat-index-hotspot">
        <div className="sislat-index-hotspot-container container">
          <div className="left">
            <Image src={SislatHotspot} alt="Sislat Hotspot image" />
          </div>
          <div className="right">
            <h3>Şəbəkə arxitekturası</h3>
            <p>
              Misafirlerinizin güvenli bir şekilde internete çıkmasını sağlarken, erişimlerini 5651 Sayılı
              Kanuna uygun olarak kayıt altına alıyor.
            </p>
            <ul>
              <li>TC Kimlik Doğrulama ve SMS ile Kayıt</li>
              <li>Türkçe Web arayüz</li>
              <li>Karşılama ekranı özelleştirme</li>
              <li>Dil desteği</li>
              <li>KVKK uyumluluğu</li>
              <li>5651 Kanununa uygun Elektronik Zaman Damgası ile imzalı kayıt</li>
              <li>Gelişmiş kullanıcı ve grup yönetimi</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sislat-index-coslat">
        <div className="sislat-index-coslat-container container">
          <div className="left">
            <h3>İT dəstək</h3>
            <p>
              Parolanız çalınsa bile siber saldırganların ağınıza erişimini engeller! Kimlik Doğrulama
              sürecinde SMS ya da Google Authenticator ile 2 aşamalı doğrulama sağlayarak VPN bağlantılarınızı
              daha güvenli hale getirir.
            </p>
            <ul>
              <li>Sms sağlayıcılar ile entegrasyon</li>
              <li>Google authenticator</li>
              <li>Ldap ile entegrasyon</li>
              <li>Kullanıcı özelliklerine göre kural atama</li>
              <li>AD security gruba göre telefon numarası çekme</li>
              <li>Kullanıcı raporlama</li>
              <li>Farklı marka cihazlarla eş zamanlı çalışma</li>
            </ul>
          </div>
          <div className="right">
            <Image src={SislatCoslat} alt="Sislat Coslat Image" />
          </div>
        </div>
      </section>
      <section className="sislat-index-cards">
        <div className="sislat-index-cards-container container">
          {cardData.map((card, key) => (
            <div className="sislat-card" key={key}>
              <h4>{card.header}</h4>
              <p>{card.p}</p>
              <Link href={"#"}>Donanım bilgileri</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Sislat;
