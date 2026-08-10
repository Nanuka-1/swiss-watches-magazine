"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-[47px] w-[230px]">
      <Image
        src="/images/logo-ring.svg"
        alt=""
        width={34.81}
        height={43.6}
        className="absolute left-[12.19px] top-0"
        priority
      />

      <Image
        src="/images/logo-red-outer.svg"
        alt=""
        width={34.42}
        height={43.36}
        className="absolute left-0 top-[3.63px]"
        priority
      />

      <Image
        src="/images/logo-red.svg"
        alt=""
        width={26.26}
        height={33.21}
        className="absolute left-[5.43px] top-[8.35px]"
        priority
      />

      <Image
        src="/images/logo-text.svg"
        alt="Swiss Watches Magazine"
        width={172.5}
        height={33.36}
        className="absolute left-[57.5px] top-[6px]"
        priority
      />
    </div>
  );
}