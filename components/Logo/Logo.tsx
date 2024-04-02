import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/_logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          alt="createLogo"
          src={"/images/logospc.jpeg"}
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "85px" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
