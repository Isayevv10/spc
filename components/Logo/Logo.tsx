import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/_logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" prefetch={true} >
        <Image
          alt="createLogo"
          src={"/images/logo.png"}
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "127px" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
