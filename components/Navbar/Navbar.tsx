import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

import "@/styles/components/_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />

      <div>
        <ul className="navbar--links">
          <li>
            <Link href="/">Ana səhifə</Link>
          </li>
          <li>
            <div className="dropdown">
              <Link href="/">Məhsullar</Link>
              <div className="dropdown-content">
                <Link href="/shoes">Ayaqqabılar</Link>
                <Link href="/">
                  Fərdi mühafizə <span className="spann">vasitələri</span>
                </Link>
                <Link href="/">Xüsusi geyimler</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/about">Haqqımızda</Link>
          </li>
          <li>
            <Link href="/contact">Əlaqə</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
