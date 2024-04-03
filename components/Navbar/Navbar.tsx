"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/styles/components/_navbar.scss";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import TopNavbar from "../TopNavbar/TopNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const outsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: Event) {
      const target = e?.target as Element;

      if (!outsideRef.current?.contains(target as Element)) {
        setIsOpen(false);
      }

      if (target.className == "navlink") {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const openSideMenu = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const openDropDown = () => {
    setIsOpenDropDown((prev: boolean) => !prev);
  };

  return (
    <div>
      <div>
        <TopNavbar />

        <div className="navbar">
          {/* RES NAV  STARTS*/}

          <div
            className={`${isOpen ? "sidemenu__navbar" : "hidden"}`}
            ref={outsideRef}
          >
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
                <Link href="/" className="navlink">
                  Ana səhifəeee
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="dropdown-mobile"
                  onClick={openDropDown}
                >
                  Məhsullar
                  <span>
                    <MdArrowDropDown style={{ margin: "0" }} size={20} />{" "}
                  </span>
                </Link>
                <div
                  className={`${
                    isOpenDropDown ? "dropdown-content-mobile" : "hidden"
                  }`}
                >
                  <Link href="/shoes" className="navlink">
                    Təhlükəsizlik <span className="spann">ayaqqabıları</span>
                  </Link>
                  <Link href="/protectional" className="navlink">
                    Fərdi mühafizə <span className="spann">vasitələri</span>
                  </Link>
                  <Link href="/clothes" className="navlink">
                    Xüsusi geyimler
                  </Link>
                </div>
              </li>

              <li>
                <Link href="/blogs" className="navlink">
                  Bloq
                </Link>
              </li>
              <li>
                <Link href="/about" className="navlink">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="navlink">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* RES NAVBAR ENDS */}

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
      </div>
    </div>
  );
};

export default Navbar;
