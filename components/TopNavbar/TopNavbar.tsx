import React from "react";
import "@/styles/components/_topNavbar.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";

const TopNavbar = () => {
  return (
    <div className="topNavbar">
      <div className="topNavbar__item--1">
        <Logo />
        <p>
          <Link href="/catalog.pdf" download="catalog">
            <span>{`Kataloqunu yüklə`}</span>{" "}
          </Link>
        </p>
      </div>
      <div className="topNavbar__item--2">+994 51 215 20 74</div>
    </div>
  );
};

export default TopNavbar;
