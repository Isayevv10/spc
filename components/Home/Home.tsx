"use client";

import React from "react";
import "@/styles/pages/_home.scss";
import "swiper/css/free-mode";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

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
              üçün ideal seçim yaradır.
            </p>

            <div className="downloads">
              <div className="downloads-costume">
                <Link href="/catalog.pdf" download="catalog">
                  <span>{`"Create Industry" məhsul kataloqunu yüklə`}</span>{" "}
                  <span>
                    <Image
                      src={"/icons/download.png"}
                      alt="download"
                      width={22}
                      height={22}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="item-2">
            <div className="client">
              <div className="client-item-1">
                <Image src="/icons/client.png" alt="" width={62} height={62} />
              </div>
              <div className="client-item-2">
                <p>Müştəri məmnuniyyəti</p>
                <p>Şirkətin əsas hədəflərindən biri müştəri məmnuniyyətidir.</p>
              </div>
            </div>

            <div className="worker">
              <div className="worker-item-1">
                <Image src="/icons/worker.png" alt="" width={62} height={62} />
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
                <Image src="/icons/depo.png" alt="" width={62} height={62} />
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

        <div className="home__brands">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/images/mfa.png"
                alt="mfa"
                width={90}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/rti.png"
                alt="rti"
                width={120}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/baymax.png"
                alt="baymax"
                width={120}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/iges.png"
                alt="iges"
                width={120}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide style={{ paddingTop: "7px" }}>
              <Image
                src="/images/jnm.png"
                alt="jnm"
                width={120}
                height={30}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/derkim.png"
                alt="jnm"
                width={120}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/biagioli.png"
                alt="jnm"
                width={140}
                height={40}
                unoptimized={true}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Main;
