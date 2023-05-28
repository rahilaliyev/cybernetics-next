import React from "react";
import SislatLogo from "../../public/sislat-page-logo.svg";
import SislatHotspot from "../../public/sislat-hotspot.svg";
import SislatHotspotIcon from "../../public/sislat-hotspot-icon.svg";
import SislatTvIcon from "../../public/sislat-tv-icon.svg";
import OkIcon from "../../public/ok-icon-green.svg";
import IdLockIcon from "../../public/id-lock.svg";
import PcIcon from "../../public/pc-icon.svg";
import AdIcon from "../../public/ad-icon.svg";
import LanIcon from "../../public/lan-icon.svg";
import LockIcon from "../../public/lock-icon.svg";
import Image from "next/image";

const Hotspot = () => {
  return (
    <section className="firewall">
      <div className="firewall-container container">
        <div className="sislat-header">
          <div className="left">
            <Image src={SislatLogo} alt="sislat-logo" className="sislat-logo" />
            <h4>Sislat Hotspot</h4>
            <p>
              Kamuya açık kablosuz ağ hizmetlerinin verildiği otel, kafe, eğitim kurumları ve misafir ağları
              gibi yerlerde internet erişimlerini güvenli bir şekilde kontrol altına alır.
            </p>
            <button className="demo">Demo tələb et</button>
          </div>
          <div className="right">
            <Image src={SislatHotspot} alt="sislat firewall" />
          </div>
        </div>
        <div className="sislat-lists">
          <ul>
            <li>
              <div className="list-icon">
                <Image src={IdLockIcon} alt="sislat-list-icon" />{" "}
              </div>
              <div className="list-text">
                <h5>Farklı Kimlik Doğrulama seçenekleri (TC Kimlik, SMS, Sponsor …)</h5>
                <p>
                  Birden fazla kimlik dorğualama seçeneğini aynı anda sunabilmesi sayesinde farklı
                  profillerdeki müşterileriniz için doğrulama seçeneklerini belirlemenize yardım eder.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={SislatHotspotIcon} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Raporlama ve 5651 loglama</h5>
                <p>
                  5651 kanununa uygun kayıt tutulabilmesinin yanında gelişmiş raporlama seçenekleri ile
                  istediğiniz rapor şablonlarını oluşturmanızı sağlar.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={PcIcon} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Kurumsal Kimliklerinize Özel Karşılama Ekranları</h5>
                <p>
                  Tasarım, html düzenleme ve dil seçenekleri gibi menülerinin kolay kullanımı ile firmanıza
                  özel tasarımlar yapabilmenizi sağlamasının yanında kendi tasarımlarınızı da yüklemenizde
                  kolaylık sunar.
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={AdIcon} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Reklam veya Bilgilendirme (KVKK Metni gibi)</h5>
                <p>
                  Müşterilerinizi bilgilendirme, onlara reklam sunma veya anket ihtiyaçlarınız için gerekli
                  tüm özelliklere sah`iptir.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={LanIcon} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>3. Parti entegrasyonlar (Ldap, Radius, AD, Otel Yazılımı, Veritabanları)</h5>
                <p>
                  Farklı kimlik doğrulama talepleriniz için tüm entegrasyonları üzerinde barındırır. Ayrıca
                  istediğiniz sisteme kolaylıkla entegre olur.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <Image src={LockIcon} alt="sislat-list-icon" />
              </div>
              <div className="list-text">
                <h5>Güvenlik Duvarı Özellikleri (Filtreleme, Kota, Hız Limitleme)</h5>
                <p>
                  Adil kullanım sağlamak veya özel izinler tanımlamak gerektiğinde sizlere kolaylık sağlaması
                  için güvenlik duvarı özelliklerini üzerinde barındırır.{" "}
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

export default Hotspot;
