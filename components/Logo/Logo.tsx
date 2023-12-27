import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          alt="createLogo"
          src={"/images/logo3.png"}
          width={125}
          height={0}
          style={{
            height: "60px",
            margin: "3px",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
