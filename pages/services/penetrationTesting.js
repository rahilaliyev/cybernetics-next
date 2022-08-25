import React from "react";
import Image from "next/image";
import TestingImage from "../../public/testing.png";
import WhiteBox from "../../public/whiteBox.png";
import BlackBox from "../../public/blackBox.png";
import GreyBox from "../../public/greyBox.png";

const Testing = () => {
  return (
    <main>
      <section className="testing">
        <div className="testing-container container">
          <div className="testing-context">
            <h1>Nüfuzetmə testi</h1>
            <div className="testing-image">
              <Image src={TestingImage} alt="test" />
            </div>
            <p>
              Müəssinizdə nüfuzetmə testini həyata keçirərək kiber hücumlarla bağlı risk göstəricilərini əks etirən hesabat və təklifləri təqim
              edirik.
            </p>
          </div>
        </div>
      </section>
      <section className="testing-about">
        <div className="testing-about-container container">
          <div className="testing-info">
            <h1>Nüfuzetmə testi nədir?</h1>
            <p>
              Pentest - Penetrasyon Testi kötü amaçlı bir saldırganın içeriden yada dışarıdan sistemlere verebileceği zararı önceden görebilmek ve
              zayıflıklar için tedbir alabilmek amaçlı planlanmış bir saldırı simülasyonudur.
            </p>
          </div>
          <div className="testing-info">
            <h1>Niyə Nüfuzetmə testi edilməlidir?</h1>
            <p>
              Penetrasyon testi - Pentest şirketin güvenlik becerilerini üst düzeyde tutmak, Dışarıdan gelebilecek saldırıları görüp önlem almak,
              Sistemlerinize yapılan yatırımı güvende tutmak ve en önemlisi de güvenlik açıkları nedeniyle oluşabilecek bilgi kayıplarına engel
              olabilmek için pentest - penetrasyon testi yapılmalıdır.
            </p>
          </div>
        </div>
      </section>
      <section className="testing-types">
        <div className="testing-types-container container">
          <div className="type-header">
            <h1>Nüfuzetmə testi növləri</h1>
          </div>
          <div className="boxes">
            <h3>BlackBox Pentest </h3>
            <div className="box-image">
              <Image src={BlackBox} alt="BlackBox" />
            </div>
            <p>
              Siyah kutu penetrasyon testi saldırı yapılacak network hakkında hiçbir bilgi sahibi olmadan yapılan saldırı türüdür. Hiçbir bilgi sahibi
              olmadan dışarıdan network e ulaşmaya çalışan saldırganın verebileceği zararın boyutlarının algılanması sağlanır.
            </p>
          </div>
          <div className="boxes">
            <h3>WhiteBox Pentest </h3>
            <div className="box-image">
              <Image src={WhiteBox} alt="WhiteBox" />
            </div>
            <p>
              Beyaz kutu penetrasyon testi network teki tüm sistemlerden bilgi sahibi olarak yapılan sızma testi türüdür. Çalışanlardan birinin
              dışarıdan ya da içerden network e girmeye ve zarar vermeye çalışmasının saldırı simülasyonu’dur.
            </p>
          </div>
          <div className="boxes">
            <h3>GreyBox Pentest </h3>
            <div className="box-image">
              <Image src={GreyBox} alt="BlackBox" />
            </div>
            <p>
              Gri kutu penetrasyon testi iç network de bulunan yetkisiz bir kullanıcının sistemlere verebileceği zararın analiz edilmesini sağlar.
              Veri çalınması, yetki yükseltme ve network paket kaydedicilerine karşı network zayıflıkları denetlenir. Genelde kurumlara gelen zararın
              % 60 oranında çalışanlarından geldiği düşünülür ise en önemli sızma testi türüdür.    
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testing;
