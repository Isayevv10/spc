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
            <Link href="/products">Məhsullar</Link>
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
