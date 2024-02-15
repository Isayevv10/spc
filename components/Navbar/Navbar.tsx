"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import "@/styles/components/_navbar.scss";
import { Search } from "../Search/Search";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const outsideRef = useRef(null);
  const refValue = outsideRef?.current as unknown as Element;

  // useEffect(() => {
  //   function handleClickOutside(e: MouseEvent) {
  //     const target = e.target as Element;

  //     if (!refValue?.classList.contains(target.className)) {
  //       console.log(target);
  //       setIsOpen((prev) => prev == false);
  //     }
  //   }
  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [outsideRef]);

  // useEffect(() => {
  //   // let sidemenu__navbar: HTMLElement =
  //   //   document.querySelector(".sidemenu__navbar")!;

  //   document.onclick = function (e) {
  //     const target = e.target as Element;

  //     if (target.classList.contains("sidemenu__navbar")) {
  //       setIsOpen((prev) => !prev);
  //     }
  //   };
  // });

  const openSideMenu = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const openDropDown = () => {
    setIsOpenDropDown((prev: boolean) => !prev);
  };

  return (
    <>
      <div className="navbar">
        {/* RES NAV  STARTS*/}

        {isOpen ? (
          <div className="sidemenu__navbar" ref={outsideRef}>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <span onClick={openSideMenu} className="closeSidebar">
                X
              </span>
            </div>
            <ul className="sidemenu__links">
              <li>
                <Link href="/">Ana səhifə</Link>
              </li>
              <li>
                <div className="dropdown" onClick={openDropDown}>
                  <Link href="#">
                    Məhsullar
                    <span>
                      {" "}
                      <MdArrowDropDown style={{ margin: "0" }} size={20} />{" "}
                    </span>{" "}
                  </Link>
                  {isOpenDropDown ? (
                    <div className="dropdown-content">
                      <Link href="/shoes">
                        Təhlükəsizlik{" "}
                        <span className="spann">ayaqqabıları</span>
                      </Link>
                      <Link href="/protectional">
                        Fərdi mühafizə <span className="spann">vasitələri</span>
                      </Link>
                      <Link href="/clothes">Xüsusi geyimler</Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
              <li>
                <Link href="/blogs">Bloq</Link>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link href="/contact">Əlaqə</Link>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        {/* RES NAVBAR ENDS */}

        <div className="navbar__logo">
          <Logo />
        </div>
        <div className="navbar__link">
          <ul className="links">
            <li>
              <Link rel="preload" href="/" as={""}>
                Ana səhifə
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <Link href="/">Məhsullar</Link>
                <div className="dropdown-content">
                  <Link href="/shoes">
                    Təhlükəsizlik <span className="spann">ayaqqabıları</span>
                  </Link>
                  <Link href="/protectional">
                    Fərdi mühafizə <span className="spann">vasitələri</span>
                  </Link>
                  <Link href="/clothes">Xüsusi geyimler</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/blogs">Bloq</Link>
            </li>
            <li>
              <Link href="/about">Haqqımızda</Link>
            </li>
            <li>
              <Link href="/contact">Əlaqə</Link>
            </li>
          </ul>
          <Search />
        </div>
        <div className="hamburger" onClick={openSideMenu}>
          {isOpen ? (
            <>X</>
          ) : (
            <button className="hamburger__bar">
              <Image
                src="/icons/hamburger.png"
                alt="navbar"
                width={25}
                height={25}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
