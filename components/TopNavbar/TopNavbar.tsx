import React from "react";
import "@/styles/components/_topNavbar.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { Search } from "../Search/Search";

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
        <div>+994 51 215 20 74</div>
        <Search />
      </div>
    </div>
  );
};

export default TopNavbar;
