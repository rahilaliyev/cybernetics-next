import React from "react";
import SislatLogo from "../../public/sislat-page-logo.svg";
import SislatFirewall from "../../public/sislat-firewall-image.png";
import SislatUrl from "../../public/sislat-url.svg";
import SislatControl from "../../public/sislat-control.svg";
import SislatVpn from "../../public/sislat-vpn.svg";
import SislatTraffic from "../../public/sislat-trafic.svg";
import SislatHotspot from "../../public/sislat-hotspot-icon.svg";
import SislatLog from "../../public/sislat-log.svg";
import SislatTvIcon from "../../public/sislat-tv-icon.svg";
import OkIcon from "../../public/ok-icon-green.svg";
import Image from "next/image";

const Firewall = () => {
  return (
    <section className="firewall">
      <div className="firewall-container container">
        <div className="sislat-header">
          <div className="left">
            <Image src={SislatLogo} alt="sislat-logo" className="sislat-logo" />
            <h4>Sislat Firewall</h4>
            <p>
              Gelişmiş güvenlik duvarı özelliklerini, saldırı tespit ve engelleme sistemlerini üzerinden
              barındıran Coslat Firewall,Türkçe Web arayüzüne sahip kolay kullanımı sayesinde karmaşıklaşan
              siber tehditlerden korunmanıza yardım eder.
            </p>
            <button className="demo">Demo tələb et</button>
          </div>
          <div className="right">
            <Image src={SislatFirewall} alt="sislat firewall" />
          </div>
        </div>
        <div className="sislat-lists">
          <ul>
            <li>
              <div className="list-icon">
                <Image src={SislatUrl} alt="sislat-list-icon" />{" "}
              </div>
              <div className="list-text">
                <h5>Url/içerik filtreleme</h5>
                <p>
                  Akıllı kategorizasyon sayesinde engellemek istediğiniz siteleri kolaylıkla bulmanıza yardım
                  eder. Ayrıca Smart HTTPs’in sizlere sunduğu yenilik ile SSL sorunları yaşamadan HTTPs
                  siteleri kolaylıkla tespit edip, engeller.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatControl} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Uygulama Kontrol(Layer7)</h5>
                <p>
                  Özel olarak geliştirilmiş uygulama tespit ve engelleme sistemi sayesinde maksimum performans
                  ile zararlı veya istediğiniz uygulamaları engeller.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatVpn} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>VPN teknolojisi</h5>
                <p>
                  Şubeler arası VPN teknolojisine sizler için geliştirilmiş Merkez/Uç Nokta bağlantı yöntemi
                  ile farklı bir bakış açısı getirir.Sabit IP, MPLS gibi sizi sınırlandıran ve maliyet yaratan
                  ihtiyaçlardan kurtarır ve sadece bir noktayı Merkez olarak belirlemeniz diğer noktaların
                  bağlanması için yeterlidir.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatTraffic} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Trafik Yönetimi</h5>
                <p>
                  Birden fazla internet hattını tek bir noktadan kolaylıkla yönetir. Bant genişliği
                  sınırlaması gibi özellikleri ile yoğun internet kullanımı olan yerlerde adil kullanım sunar.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatHotspot} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Hotspot</h5>
                <p>
                  Misafir ağlarınızı yerel ağdan kolaylıkla ayırabilir ve misafirleriniz için gelişmiş kimlik
                  doğrulama seçenekleri (TC Kimik, SMS, Sponsorlu Kayıt gibi) sayesinde size uygun
                  kişiselleştirilebilir karşılama ekranlarını ayarlamanızı kolaylaştırır.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatLog} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Loglama (5651 uyumlu)</h5>
                <p>
                  Zaman damgası ile log kayıtlarını 5651 Kanununa uygun bir şekilde imzalar.Ayrıca üzerinde
                  barındırdığı disk kapasitesi sayesinde ek bir sunucuya gerek kalmadan en az 2 yıl imzalanmış
                  5651 loglarını kendi üzerinde saklar.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="sislat-table-lists">
          <div className="table-header">
            <Image src={SislatTvIcon} alt="tv" />
            <h4>Sislat Firewall Ürün Özellikleri</h4>
          </div>
          <div className="table-lists">
            <ul>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> Web içerik/URL (HTTP/HTTPs) Filtreleme</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> SSL sertifika ile filtreleme</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> URL karaliste güncellemesi</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> Loglama ve Hotpsot için LDAP entegrasyonu</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> IPSec VPN</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Misafir Portalı (Hotspot)</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Trafik izleme</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> DHCP Sunucu</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> Saldırı Tespit / Engelleme (IDS/IPS)</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> DNS Filtreleme</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Dinamik ve Statik NAT</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Bant Genişliği Yönetimi</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Vekil sunucu (Proxy)</span>
              </li>
            </ul>
            <ul>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> Smart HTTPS filtreleme ile Transparent desteği</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> Uygulama filtreleme (Layer 7 Filtering)</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" />{" "}
                <span className="text"> 5651 Kanununa uygun Elektronik Zaman Damgası ile imzalı kayıt</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> SSL VPN ve 2FA</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> L2TPover IPSEC </span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text">Türkçe Web arayüzü</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Vlan desteği</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> DNS Sunucu</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Çoklu WAN yönetimi</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> USOM Karaliste</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Trafik şekillendirme</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> IPv6 Desteği</span>
              </li>
              <li>
                <Image src={OkIcon} alt="icon" /> <span className="text"> Syslog Sunucu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sislat-table">
          <h2>SISLAT DONANIM KARŞILAŞTIRMA TABLOSU</h2>
          <div className="table-container">
            <div className="groups">
              <div className="blue">Giriş (15,30,50)</div>
              <div className="green">Giriş (15,30,50)</div>
              <div className="red">Giriş (15,30,50)</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                  <th>BX5S1D3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ram</td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                  <td>
                    <div>2 GB</div>
                  </td>
                </tr>
                <tr>
                  <td>Port (1 Gb) </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                </tr>
                <tr>
                  <td>Port (10 Gb) </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                  <td>
                    <div>-</div>
                  </td>
                </tr>
                <tr>
                  <td>Disk </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                  <td>
                    <div>240 GB</div>
                  </td>
                </tr>
                <tr>
                  <td>Boyut </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                  <td>
                    <div>152.4 x 152.4 </div>
                  </td>
                </tr>
                <tr>
                  <td>Firewall Throughput</td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                  <td>
                    <div>750 Mbps </div>
                  </td>
                </tr>
                <tr>
                  <td>Concurrent Sessions </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                  <td>
                    <div>850 000</div>
                  </td>
                </tr>
                <tr>
                  <td>IPsec VPN Throughput </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                  <td>
                    <div>65 Mbps </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firewall;
