import React from "react";
import Image from "next/image";
import "@/styles/pages/_home.scss";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";

const Main = () => {
  return (
    <>
      <Carousel />

      <div className="home">
        <div className="home__content">
          <div className="item-1">
            <p>CREATE INDUSTRY</p>
            <p>
              Sağlamlıq və əməyin təhlükəsizliyinin təmin olunması üçün
              işçilərin xüsusi geyim, ayaqqabı, maskalar və digər fərdi mühafizə
              vasitələri ilə təmin olunması müstəsnə əhəmiyyət daşıyır.İşçilərin
              fərdi mühafizə vasitələri ilə təmin olunması qədər, bu vasitələrin
              mövcüd keyfiyyət standartlarına uyğun hazırlanması da bir o qədər
              vacib amildir. 2019-cu ildən fəaliyyət göstərən Create İndustry
              sizə təqdim etdiyi üstün keyfiyyətli və Avropa standartlarına
              uyğun vasitələrlə əməkdaşlarınızın təhlükəsizliyini təmin etməniz
              üçün ideal seçim yaradır
            </p>

            <div className="downloads">
              <div className="downloads-costume">
                <Link href="/geyim.pdf" download="geyim">
                  Xüsusi geyim kataloqu{" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 19"
                    width={20}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="item-2">
            <div className="client">
              <div className="client-item-1">
                <Image src="/icons/client.svg" alt="" width={66} height={66} />
              </div>
              <div className="client-item-2">
                <p>Müştəri yönümlülük</p>
                <p>Şirkətin əsas hədəflərindən biri müştəri məmnuniyyətidir.</p>
              </div>
            </div>

            <div className="worker">
              <div className="worker-item-1">
                <Image src="/icons/worker.svg" alt="" width={66} height={66} />
              </div>
              <div className="worker-item-2">
                <p>Təcrübəli və peşəkar kadrlar</p>
                <p>
                  Şirkətin maddi-texniki bazası və mütəxəssislərinin yüksək
                  peşəkarlığı görülən işlərin keyfiyyətlə, vaxtında və zəmanətlə
                  yerinə yetirilməsini təmin edir
                </p>
              </div>
            </div>

            <div className="depo">
              <div className="depo-item-1">
                <Image src="/icons/depo.svg" alt="" width={66} height={66} />
              </div>
              <div className="depo-item-2">
                <p>Anbarlama</p>
                <p>
                  Daimi olaraq hazır məhsul anbarında bir çox modelləri
                  saxlayırıq.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="home__brands">
          <div>
            <Image
              src="/images/mfa.png"
              alt="mfa"
              width={90}
              height={40}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="/images/rti.png"
              alt="rti"
              width={120}
              height={40}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="/images/baymax.png"
              alt="baymax"
              width={120}
              height={40}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="/images/iges.png"
              alt="iges"
              width={120}
              height={40}
              unoptimized={true}
            />
          </div>
          <div style={{ paddingTop: "7px" }}>
            <Image
              src="/images/jnm.png"
              alt="jnm"
              width={120}
              height={30}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="/images/derkim.png"
              alt="jnm"
              width={90}
              height={40}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="/images/biagioli.png"
              alt="jnm"
              width={135}
              height={40}
              unoptimized={true}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;
