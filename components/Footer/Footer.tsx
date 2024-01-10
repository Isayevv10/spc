import React from "react";
import Link from "next/link";
import "@/styles/components/_footer.scss";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item--links">
        <p className="footer__item--links-title">Menu</p>
        <ul className="footer__item--links-design">
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
            <div>
              <BsTelephone size="18" />
            </div>
            <div>+994 51 215 20 74</div>
          </div>
          <div>
            <div>
              <MdOutlineEmail size="18" />
            </div>
            <div>info@createindustry.az</div>
          </div>
          <div>
            <div>
              <CiLocationOn size="18" />
            </div>
            <div> Abşeron rayonu, Qobu qəsəbəsi</div>
          </div>
          <div>
            <div>
              <FaRegCopyright size="18" />
            </div>
            <div> Müəllif hüquqları qorunur 2023</div>
          </div>
        </div>
      </div>

      <div className="footer__item--follow">
        <p className="footer__item--follow-title">Bizi izləyin</p>
        <div className="footer__item--follow-details">
          <div>
            <div>
              <BiLogoFacebookSquare size="19" />
            </div>
            <div>Facebook</div>
          </div>
          <div>
            <div>
              <FaInstagram size="19" />
            </div>
            <div>Instagram</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
