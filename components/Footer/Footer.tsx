import React from "react";
import Link from "next/link";
import "@/styles/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item--links">
        <p className="footer__item--links-title">Menu</p>
        <ul className="footer__item--links-details">
          <li>
            <Link href="/about">Haqqımızda</Link>
          </li>
          <li>
            <Link href="/shoes">Məhsullar</Link>
          </li>
          <li>
            <Link href="/contact"> Əlaqə</Link>
          </li>
        </ul>
      </div>

      <div className="footer__item--contact">
        <p className="footer__item--contact-title">Əlaqələr</p>
        <div className="footer__item--contact-details">
          <div>
            <div className="context-info">+994 51 215 20 74</div>
          </div>
          <div>
            <div className="context-info">info@spcgroup.az</div>
          </div>
          <div>
            <div className="context-info"> Abşeron rayonu, Qobu qəsəbəsi</div>
          </div>
        </div>
      </div>

      <div className="footer__item--follow">
        <p className="footer__item--follow-title">Bizi izləyin</p>
        <div className="footer__item--follow-details">
          <div>
            <div className="context-info">
              <Link href="https://wa.link/ac1mcl">Whatsapp</Link>
            </div>
          </div>
          <div>
            <div className="context-info">
              <Link href="https://www.instagram.com/createindustry.az/">
                Instagram
              </Link>
            </div>
          </div>
          <div>
            <div className="context-info">
              <Link href="https://www.facebook.com/photo.php?fbid=122106376790194513&set=pb.61555835408682.-2207520000&type=3">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
