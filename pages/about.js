import Image from "next/image";
import React from "react";
import Logo from "../public/logo-about.svg";
import Card1 from "../public/aboutcard-1.png";
import Card2 from "../public/aboutcard-2.png";
import Card3 from "../public/aboutcard-3.png";
import Card4 from "../public/aboutcard-4.png";
import Card5 from "../public/aboutcard-5.png";

const About = () => {
  return (
    <main className="about">
      <section className="logo-about container">
        <Image src={Logo} alt="Logo" />
      </section>
      <section className="about-info">
        <div className="about-info-container container">
          <div className="text-information">
            <h2>Şirkətin təsviri</h2>
            <p>
              Cybernetics MMC, 2020-ci ildə qurulub və kiber təhlükəsizlik həllərinin təmini, kiber təhlükəsizlik sektorunda ixtisaslaşdırılmış
              mütəxəssislərin hazırlanması, korporativ şirkət və qurumlarda təhlükəsizlik xidmətlərinin göstərilməsi, yeni nəsil təhlükəsizlik
              texnologiyalarının yaradılması, inkişafı, yerli təhlükəsizlik məhsullarının istehsalı, dünya bazarına ixracı eyni zamanda ölkəmizdə
              Rəqəmsal Ekspertiza (Digital Forensic) sahəsinin formalaşması məqsədini daşıyır. Şirkətimiz “SISLAT” milli brendi ilə şəbəkə və
              informasiya təklükəsizliyi qurğularını (firewall, hotspot, 2FA və s.) istehsal edir.
            </p>
          </div>
          <div className="text-information">
            <h2>Şirkətin hədəfləri</h2>
            <p>
              Azərbaycan bazarında kiber təhlükəsizlik sahəsində ən etibarlı şirkət olmağı, məhsulların istehsalını yerli və dünya bazarına
              çıxarılmasını hədəfləyir.
            </p>
          </div>
        </div>
      </section>
      <section className="obligation">
        <div className="obligation-container container">
          <h2>Şirkətin öhdəlikləri</h2>
          <p>
            Cybernetics MMC, Azərbaycan şirkəti olaraq müştərisinin etibarı, məlumat gizliliyi və məmnunluğunu daim prioritet tutaraq fəaliyyət
            göstərir. Cybernetics MMC, müştəri yönümlü beynəlxalq etibarlı şirkət olmağı hədəfləyir. Bu istiqamətdə aşağıdakı öhdəlikləri daşıyır:
          </p>
          <div className="obligation-cards">
            <div className="card">
              <div className="card-image">
                <Image src={Card1} alt="card" />
              </div>
              <div className="card-text">
                <p>Kiber təhlükəsizlik sahəsində qabaqcıl məhsullar və xidmətlər təklif etmək </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Image src={Card2} alt="card" />
              </div>
              <div className="card-text">
                <p>Müştərilərimiz və biznes tərəfdaşlarımız üçün dürüst və etibarlı xidmət göstərməkt</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Image src={Card3} alt="card" />
              </div>
              <div className="card-text">
                <p>Müştərilərin ehtiyaclarını nəzərə alaraq, səmimiyyətlə problemləri operativ və effektiv həllini təmin etmək</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Image src={Card4} alt="card" />
              </div>
              <div className="card-text">
                <p>Davamlı inkişafa açıq yeni məhsul və texnologiyaların yaradılması</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Image src={Card5} alt="card" />
              </div>
              <div className="card-text">
                <p>Bilik, bacarıq və texnologiyalarımızı bölüşərək informasiya cəmiyyətinə töhfə vermək</p>
              </div>
            </div>
          </div>
          <h2>Keyfiyyət siyasəti</h2>
          <p>Cybernetics şirkətinin prioritet keyfiyyət siyasəti müştəri məmnuniyyətini təmin etməkdir.</p>
          <ul>
            <li>İstehsal və xidmət prosesinin yerli və beynəlxalq standartlarına uyğun olaraq həyata keçirmək</li>
            <li>Əməkdaşların xidmət keyfiyyətinin artırılması məqsədilə mütəmadi təlimlərdə iştirakını təmin etmək</li>
            <li>
              Həyata keçirilən işləri davamlı inkişaf etdirmək məqsədilə qabaqcıl texnologiyalardan istifadə edərək operativ və effektiv şəkildə təmin
              etmək
            </li>
            <li>
              İşin və xidmətlərin davamlılığını təmin etmək üçün lazımi planları hazırlamaq və həyata keçirmək, şirkətin tələb etdiyi standartlara
              uyğun olaraq audit xidmətini həyata keçirmək
            </li>
            <li>Təşkilati yanaşma və keyfiyyətin davamlı olaraq yaxşılaşdırılması məqsədilə innovativ uyğunluşma siyasətini tətbiq etmək</li>
            <li>Təchizatçılarımıza dəstək olmaq və inkişaf prosesləri və keyfiyyət səviyyələrini artırmaq.</li>
            <li>Xidmət keyfiyyətimizi müştərilərimizə vaxtında və etibarlı əks etdirmək üçün</li>
            <li>Ətraf mühitlə ahəngdar işləmək</li>
            <li>Qanuni və digər şərtlərə uyğun işləmək</li>
          </ul>
        </div>
      </section>
      <section className="endurance">
        <div className="endurance-container container">
          <h2>Şirkətin dayanıqlığı</h2>
          <p>
            “Cybernetics” MMC kibertəhlükəsizlik sahəsində ixtisaslaşmış və əsas fəaliyyət istiqaməti olaraq nəzərdə tutulmuş hüquqi şirkətdir.
            “Cybernetics” MMC ölkədaxili və beynəlxalq kibertəhlükəsizlik şirkətləri ilə əməkdaşlıq edir və maddi texniki bazanın yaradılmasında
            beynəlxalq təcrübələrə malikdir. Bununla birlikdə şirkətdaxili fəaliyyət göstərən mütəxəssislər də elmi-pedoqoji sahədə yerli və
            beynəlxalq təcrübələr qazanmışdır. “Cybernetics” MMC-nin yuxarıda göstərilən xüsusiyyətləri şirkət fəaliyyətini dayanıqlı şəkildə həyata
            keçirəcəyini göstərən meyardır.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
