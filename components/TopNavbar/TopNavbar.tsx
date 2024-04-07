import React from "react";
import "@/styles/components/_topNavbar.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { Search } from "../Search/Search";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className="topNavbar">
      <div className="topNavbar__item--1">
        <Logo />
        <p>
          <Link href="/spcCatalog.pdf" download="catalog">
            <span>{`Kataloqu yüklə`}</span>{" "}
          </Link>
        </p>
      </div>
      <div className="topNavbar__item--2">
        <div>
          <Image src="/icons/mobile.png" alt="phone" width={20} height={20} />
          <span>+994 50 210 36 84</span>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default TopNavbar;
