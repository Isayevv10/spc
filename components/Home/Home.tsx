"use client";

import React, { useEffect, useState } from "react";
import "@/styles/pages/_home.scss";
import "swiper/css/free-mode";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CarouselMobile from "../Carousel/CarouselMobile";
import Carousel from "../Carousel/Carousel";

const Main = () => {
  const [width, setWidth] = useState<number>(0);

  const handleResize = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    handleResize();
  }, [width]);

  return (
    <>
      {width < 479 ? <CarouselMobile /> : <Carousel />}

      <div className="home">
        <div className="home__content">
          {/* <div className="item-1">
            <p>SPC</p>
            <p>
              2016-cı ildə fəaliyyət göstərən SPC şirkətinin əsas fəaliyyət
              istiqamətləri işçi geyimləri və ayaqqabılarının istehsalı, eyni
              zamanda distribütoru olduğu digər qism fərdi mühafizə
              vasitələrinin isə ən keyfiyyətli məhsulların istehsalçıları olan
              tanınmış firmaların məhsullarının idxalıdır. SPC şirkəti bu
              günədək çox sayda dövlət və özəl sifarişləri icra edərək
              istehlakçılara yüksək keyfiyyətli məhsullar təklif etdiyini
              praktiki olaraq sübut etmişdir. Əməkdaşlıq nəticəsində
              istehlakçıların tələblərinin ən yüksək səviyyədə təmin olunmasını
              prioritet olaraq müəyyən edən şirkət öz məhsullarını əyani olaraq
              nəzərdən keçirmək və sifarişləri zamanında qarşı tərəfə təhvil
              verməyə xüsusi önəm veririk, bunun üçün anbarımızda çox sayda və
              müxtəlif kateqoriyalı məhsullar saxlayırıq. Siz də ən yüksək
              keyfiyyətli fərdi mühafizə vasitələri, xüsusi geyimlər,
              təhlükəsizlik ayaqqabıları əldə edib əməkdaşlarınızı keyfiyyətli
              iş geyimləri, ayaqqabılar və vasitələrlə təmin etməyi düşünürsünüzsə
              o zaman bizə müraciət edin və razı qalın!
            </p>
          </div> */}

          <div className="client">
            <div className="client-item-1">
              <Image src="/icons/client.png" alt="" width={59} height={59} />
            </div>
            <div className="client-item-2">
              <p>Müştəri məmnuniyyəti</p>
              <p>Şirkətin əsas hədəflərindən biri müştəri məmnuniyyətidir.</p>
            </div>
            <div>01</div>
          </div>

          <div className="worker">
            <div className="worker-item-1">
              <Image src="/icons/worker.png" alt="" width={59} height={59} />
            </div>
            <div className="worker-item-2">
              <p>Təcrübəli və peşəkar kadrlar</p>
              <p>
                Şirkətin maddi-texniki bazası və mütəxəssislərinin yüksək
                peşəkarlığı görülən işlərin keyfiyyətlə, vaxtında və zəmanətlə
                yerinə yetirilməsini təmin edir
              </p>
            </div>
            <div>02</div>
          </div>

          <div className="depo">
            <div className="depo-item-1">
              <Image src="/icons/depo.png" alt="" width={59} height={59} />
            </div>
            <div className="depo-item-2">
              <p>Anbarlama</p>
              <p>
                Daimi olaraq hazır məhsul anbarında bir çox modelləri
                saxlayırıq.
              </p>
            </div>
            <div>03</div>
          </div>
        </div>
        {/* <div className="home__brands">
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
        </div> */}
      </div>
    </>
  );
};

export default Main;
