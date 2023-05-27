import React from "react";
import Image from "next/image";
import HeaderLogo from "../../../public/code.png";
import ManImage from "../../../public/man.png";
import Career1 from "../../../public/career1.png";
import Career2 from "../../../public/career2.png";
import Career3 from "../../../public/career3.png";

const WebProgramming = () => {
  return (
    <main>
      <section className="preparation-details">
        <div className="preparation-details-wrapper">
          <div className="preparation-details-container container">
            <div className="details-header">
              <div className="header-image">
                <Image src={HeaderLogo} alt="Code" />
              </div>
              <h1>Şəbəkə kursları</h1>
              <p>
                Həyatımızın bir parçasına çevrilmiş texnologiyaya qarşı asılılığımız günü gündən artır və elə
                bu səbəbdən, biz Kiber Təhlükəsizliyin əhəmiyyətini göz ardı edə bilmərik. Kiber təhlükəsizlik
                sistemlərin, şəbəkələrin və proqramların rəqəmsal hücumlardan qorunmasıdır. Bu kiberhücumlar
                məlumatları əldə etmək, dəyişdirmək və ya məhv etmək məqsədi daşıyır. Kiber təhlükəsizlik
                analitiki interneti hər kəs üçün daha təhlükəsiz edir. v
              </p>
              <div className="main-image">
                <Image src={ManImage} alt="Man" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="white-section">
        <span className="white-section-header">
          <h3>Nə öyrənəcəksiz?</h3>
        </span>
      </section>
      <section className="learning">
        <div className="learning-container container">
          <div className="lists">
            <ul>
              <li>İnformasiya təhlükəsizliyi və pentest üzrə peşəkar biliklər</li>
              <li>Etik haker nəzəriyyəsi və praktikası</li>
              <li>Şəbəkələrin yoxlanılması və əks tədbirlər</li>
              <li>Müxtəlif əməliyyat sistemlərinin hakinq metod və üsulları</li>
              <li>Zərərli proqramlarla mübarizə aparmağın yolları</li>
              <li>“Packet sniffing”, “Social Engineering”, “DoS/DDoS attack” texnikaları</li>
            </ul>
            <ul>
              <li>Veb serverlərdə və veb resurslarda hakinq və müdafiə texnologiyaları</li>
              <li>Naqilsiz şəbəkələrdə hakinq və təhlükəsizlik üsulları</li>
              <li>Müxtəlif növ kriptoqrafiya, hücum və təhlil alətləri</li>
              <li>Zəifliklərin müəyyən edilməsi təhlilinin aparılması bilikləri</li>
              <li>IoT platformalarda kibertəhlükəsizlik</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="area-work">
        <div className="area-work-container container">
          <div className="area-content">
            <div className="area-content-header">
              <h1>Əsas iş sahələri</h1>
            </div>
            <div className="content">
              <ul className="content__container__list">
                <li className="content__container__list__item">Cryptographer</li>
                <li className="content__container__list__item">Forensics Expert</li>
                <li className="content__container__list__item">Incident Responder</li>
                <li className="content__container__list__item">Penetration Tester</li>
                <li className="content__container__list__item">Security Administrator</li>
                <li className="content__container__list__item">Security Analyst</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="applying">
        <div className="applying-container container">
          <div className="applying-container-header">
            <h1>Kimlər müraciət edə bilər?</h1>
          </div>
          <p>
            Analitik və diaqnostik bacarıqları olan və kodlaşdırmaya marağı olan hər kəs proqrama qoşula
            bilər. Bunun üçün sizdən xüsusi təhsil göstəricisi deyil, komandada işləmə bacarığı və detallara
            diqqət tələb olunur.
          </p>
          <div className="applying-container-cards">
            <div className="card">
              <span className="up">Akademik saatlar</span>
              <span className="down">128</span>
            </div>
            <div className="card">
              <span className="up">Texniki İngilis dili</span>
              <span className="down">+</span>
            </div>
            <div className="card">
              <span className="up">Qəbul prosesi</span>
              <span className="down">Sıfırdan</span>
            </div>
            <div className="card">
              <span className="up">Gündəlik işləmə imkanı</span>
              <span className="down">+</span>
            </div>
            <div className="card">
              <span className="up">Konsultasiya dəstəyi</span>
              <span className="down">+</span>
            </div>
            <div className="card">
              <span className="up">Proyekt sayı</span>
              <span className="down">3</span>
            </div>
            <div className="card">
              <span className="up">Tədris müddəti</span>
              <span className="down">5 ay</span>
            </div>
            <div className="card">
              <span className="up">Praktiki saatlar</span>
              <span className="down">144</span>
            </div>
            <div className="card">
              <span className="up">Modullar</span>
              <span className="down">5</span>
            </div>
          </div>
        </div>
      </section>
      <section className="career">
        <div className="career-container container">
          <h1>Karyera imkanı</h1>
          <div className="career-container-context">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium aliquam purus proin ultrices
                id scelerisque imperdiet morbi. Pharetra duis ut arcu venenatis. Dui interdum laoreet orci
                dictum ut mi laoreet erat urna. Pretium posuere ultricies cras volutpat curabitur. Ut id ut
                sodales risus aenean tristique urna nibh. Blandit viverra massa dolor, in convallis duis id.
                Orci nisl in faucibus sed nascetur feugiat placerat. Donec elit dignissim integer eu, morbi
                sagittis, sed ultrices. Pretium sed neque in pretium nulla nisl. Sapien velit, massa pharetra
                sagittis, a est at dolor. Imperdiet morbi tortor tempor, viverra id purus. Nibh condimentum
                adipiscing pretium donec sagittis. Neque tristique nibh vel eu. Dignissim turpis sed
                adipiscing habitasse at velit et. Malesuada ornare donec consequat luctus rhoncus. Adipiscing
                convallis ridiculus sed gravida.
              </p>
            </div>
            <div className="right">
              <div className="image">
                <Image src={Career1} alt="Career" />
              </div>
              <div className="image">
                <Image src={Career2} alt="Career" />
              </div>
              <div className="image">
                <Image src={Career3} alt="Career" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-education">
        <div className="about-education-container container">
          <h1>Keyfiyyətli təhsil</h1>
          <div className="about-education-container-cards">
            <div className="card">
              <h3>Dictumst tronus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis arcu tristique amet enim
                purus. Nulla et eu velit nisl, arcu lobortis urna pulvinar. Venenatis arcu morbi donec donec
                ultrices.
              </p>
            </div>
            <div className="card">
              <h3>Et justo aliquet id.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suspendisse dolor elit lectus
                at. Nulla at erat velit tincidunt aliquet diam id. In nisl lorem et luctus. Ipsum suscipit
                tortor purus enim.
              </p>
            </div>
            <div className="card">
              <h3>Nunc molestie ac.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis arcu tristique amet enim
                purus. Nulla et eu velit nisl, arcu lobortis urna pulvinar. Venenatis arcu morbi donec donec
                ultrices.
              </p>
            </div>
            <div className="card">
              <h3>Velit odio nibh sed.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis arcu tristique amet enim
                purus. Nulla et eu velit nisl, arcu lobortis urna pulvinar. Venenatis arcu morbi donec donec
                ultrices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="application-form">
        <div className="application-form-container container">
          <form>
            <h2>Müraciət forması</h2>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="name">
                  Ad, Soyad <span>*</span>
                </label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-label">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-label">
                <label htmlFor="phone">
                  Əlaqə nömrəsi<span>*</span>
                </label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="form-label">
                <label htmlFor="select">
                  Tədris istiqamətini seç <span>*</span>
                </label>
                <select id="select" name="select">
                  <option value={""} defaultValue></option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="form-label">
                <button type="submit">Müraciət Et</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default WebProgramming;
