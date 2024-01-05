import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          alt="createLogo"
          src={"/images/logo.png"}
          width={125}
          height={0}
          style={{
            height: "60px",
            margin: "3px",
            width: "125px",
            objectFit: "contain",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
