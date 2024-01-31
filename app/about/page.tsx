import Image from "next/image";
import React from "react";
import "@/styles/pages/_about.scss";
import { truncate } from "@/helpers/truncate";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__content">
          <div className="about__content__item-1">
            <div className="readMore--desktop">
              “CREATE İNDUSTRY” 2019 -cu ildən Azərbaycanda işçi ayaqqabıları və
              rezin çəkmələrin istehsalını həyata keçirir. Şirkət bu günədək
              müxtəlif özəl və dövlət sifarişlərini müvəffəqiyyətlə yerinə
              yetirmişdir. Create Industry sifarişin dərhal yerinə yetirilməsi
              üçün daim anbarında müxtəlif çeşid hazır ayaqqabı modelləri
              saxlayır. Şirkətin maddi-texniki bazası və çalışan
              mütəxəssislərinin yüksək peşəkarlığı görülən işlərin keyfiyyətli,
              vaxtında və zəmanətlə yerinə yetirilməsini təmin edir. İşçi
              ayaqqabılarının və rezin çəkmələrin istehsalı üzrə AZS və ISO -TÜV
              Avstriya sertifikatlarını almış “CREATE İNDUSTRY” partnyor
              şirkətlərin və fərdi müştərilərin etimadını və etibarını qorumaqla
              müxtəlif şəraitdə və sahələrdə çalışan hər bir işçiyə ehtiyac
              duyduğu təhlükəsizliyi, davamlılığı və rahatlığı təklif edir.
            </div>

            <div className="readMore--mobile">
              <p>
                {truncate(`“CREATE İNDUSTRY” 2019 -cu ildən Azərbaycanda işçi ayaqqabıları və
            rezin çəkmələrin istehsalını həyata keçirir. Şirkət bu günədək
            müxtəlif özəl və dövlət sifarişlərini müvəffəqiyyətlə yerinə
            yetirmişdir. Create Industry sifarişin dərhal yerinə yetirilməsi
            üçün daim anbarında müxtəlif çeşid hazır ayaqqabı modelləri
            saxlayır. Şirkətin maddi-texniki bazası və çalışan mütəxəssislərinin
            yüksək peşəkarlığı görülən işlərin keyfiyyətli, vaxtında və
            zəmanətlə yerinə yetirilməsini təmin edir. İşçi ayaqqabılarının və
            rezin çəkmələrin istehsalı üzrə AZS və ISO -TÜV Avstriya
            sertifikatlarını almış “CREATE İNDUSTRY” partnyor şirkətlərin və
            fərdi müştərilərin etimadını və etibarını qorumaqla müxtəlif
            şəraitdə və sahələrdə çalışan hər bir işçiyə ehtiyac duyduğu
            təhlükəsizliyi, davamlılığı və rahatlığı təklif edir.`)}
              </p>
              <button>...Read More</button>
            </div>
          </div>

          <div className="about__content__item-2">
            <Image
              src="/images/certificate1.png"
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
