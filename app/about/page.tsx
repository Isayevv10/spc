"use client";

import Image from "next/image";
import React from "react";
import "@/styles/pages/_about.scss";
import { truncate } from "@/helpers/truncate";

const About = () => {
  const readMore = () => {
    let readMoreMobile = document.getElementsByClassName(
      "readMore--mobile"
    )[0] as HTMLElement;

    readMoreMobile.style.display = "none";

    let readMoreDesktop = document.getElementsByClassName(
      "readMore--desktop"
    )[0] as HTMLElement;

    readMoreDesktop.style.display = "block";
  };

  return (
    <>
      <div className="about">
        <div className="about__content">
          <div className="about__content__item-1">
            <div className="readMore--desktop">
              2016-cı ildə fəaliyyət göstərən SPC şirkətinin əsas fəaliyyət
              istiqamətləri işçi geyimləri istehsalı, eyni zamanda distribütoru
              olduğu digər qism fərdi mühafizə vasitələrinin isə ən keyfiyyətli
              məhsulların istehsalçıları olan tanınmış firmaların məhsullarının
              idxalıdır. SPC şirkəti bu günədək çox sayda dövlət və özəl
              sifarişləri icra edərək istehlakçılara yüksək keyfiyyətli
              məhsullar təklif etdiyini praktiki olaraq sübut etmişdir.
              Əməkdaşlıq nəticəsində istehlakçıların tələblərinin ən yüksək
              səviyyədə təmin olunmasını prioritet olaraq müəyyən edən şirkət öz
              məhsullarını əyani olaraq nəzərdən keçirmək və sifarişləri
              zamanında qarşı tərəfə təhvil verməyə xüsusi önəm veririk, bunun
              üçün anbarımızda çox sayda və müxtəlif kateqoriyalı məhsullar
              saxlayırıq. Siz də ən yüksək keyfiyyətli fərdi mühafizə
              vasitələri, xüsusi geyimlər, təhlükəsizlik ayaqqabıları əldə edib
              əməkdaşlarınızı keyfiyyətli iş geyimləri,ayaqqabılar və
              vasitələrlə təmin etməyi üşünürsünüzsə o zaman bizə müraciət edin
              və razı qalın!
            </div>

            <div className="readMore--mobile">
              <p>
                {truncate(
                  `2016-cı ildə fəaliyyət göstərən SPC şirkətinin əsas fəaliyyət
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
                  iş geyimləri,ayaqqabılar və vasitələrlə təmin etməyi üşünürsünüzsə
                  o zaman bizə müraciət edin və razı qalın!`
                )}
              </p>
              <button onClick={readMore}>...Davamını oxu</button>
            </div>
          </div>

          <div className="about__content__item-2">
            <Image
              src="/images/s1.jpeg"
              alt="c1"
              width={200}
              height={250}
              unoptimized={true}
            />
            <Image
              src="/images/certificate2.png"
              alt="c2"
              width={200}
              height={250}
              unoptimized={true}
            />
            <Image
              src="/images/certificate3.jpg"
              alt="c3"
              width={200}
              height={250}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
