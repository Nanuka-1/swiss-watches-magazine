"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover } from "@/components/animations/imageHover";
import { bookmarkHover } from "@/components/animations/bookmarkHover";
import { categoryHover } from "@/components/animations/categoryHover";
import { titleHover } from "@/components/animations/titleHover";
import { authorHover } from "@/components/animations/authorHover";


export default function BoutiqueTravelGuide() {
  return (
    <section
      className="
        mx-auto
        mt-[332px]
        w-[1276px]
      "
    >
      {/* Section header */}
      <div
        className="
          flex
          h-[40px]
          w-[1276px]
          items-start
          justify-between
        "
      >
        {/* Title */}
        <div className="h-[39px] w-[306px]">
          <h2
            className="
              text-[24px]
              font-semibold
              leading-[29px]
              text-[#090909]
            "
          >
            BOUTIQUE TRAVEL GUIDE
          </h2>

          <div className="mt-[10px] flex h-px w-[306px]">
            <span className="h-px w-[153px] bg-[#FBB64D]" />
            <span className="h-px w-[153px] bg-[#DDDDDD]" />
          </div>
        </div>

        {/* View all */}
        <button
          type="button"
          className="
            h-[40px]
            w-[195px]
            border
            border-[#404040]
            text-[12px]
            font-medium
            uppercase
            text-[#090909]
          "
        >
          View all boutique
        </button>
      </div>

      {/* Cards */}
      <div className="mt-[40px] w-[1276px]">
        {/* Top row */}
        <div className="flex h-[341px] w-[1276px]">
          {/* Main text card */}
<div
  className="
    relative
    flex
    h-[341px]
    w-[648px]
    flex-col
    items-center
    bg-[#F4F4F4]
    pt-[54.58px]
    pb-[63.42px]
  "
>
  {/* Bookmark */}
<motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="
    absolute
    right-[29px]
    top-[54.58px]
    z-20
    h-[60px]
    w-[14px]
    cursor-pointer
  "
>
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
  />

  <motion.svg
    width="14"
    height="60"
    viewBox="0 0 14 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
    aria-hidden="true"
  >
    <path
      d="M0 0H14V21L7 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      pointer-events-none
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      whitespace-nowrap
      border
      border-[#BF985C]
      bg-white
      text-[12px]
      font-normal
      leading-none
      text-[#090909]
    "
  >
    <span className="relative top-px">
      Add article to favourites
    </span>
  </motion.div>
</motion.div>

  {/* Category + title + description */}
  <div
    className="
      flex
      h-[168px]
      w-[520px]
      flex-col
      items-center
      text-center
    "
  >
    {/* Category */}
<motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={categoryHover.container}
  className="
    relative
    flex
    h-[15px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={categoryHover.line}
    className="
      absolute
      left-0
      top-1/2
      h-px
      -translate-y-1/2
      bg-[#BF985C]
    "
  />

  <motion.span
    variants={categoryHover.text}
    className="
      text-[11px]
      font-medium
      leading-[15px]
      uppercase
      text-[#404040]
    "
  >
    BOUTIQUE TRAVEL GUIDE
  </motion.span>
</motion.div>

    {/* Title */}
    <motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    cursor-pointer
    text-[24px]
    font-semibold
    leading-[30px]
    text-[#090909]
  "
>
  Panerai Boutique Stuttgart
</motion.h3>

    {/* Description */}
    <p
      className="
        mt-[20px]
        w-[520px]
        font-['Bitter']
        text-[16px]
        font-normal
        leading-[26px]
        text-[#404040]
      "
    >
      Swisswatches is launching its first ‘Boutique Travel Guide’ for its watch
      community. In this section, we want to showcase the many watch boutiques
      that are worth visiting...
    </p>
  </div>

  {/* Author */}
<motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    relative
    mt-[40px]
    h-[15px]
    w-[145px]
    cursor-pointer
  "
>
  <motion.span
    aria-hidden="true"
    variants={authorHover.line}
    transition={authorHover.transition}
    className="
      absolute
      bottom-0
      left-0
      h-[15px]
      w-px
      origin-bottom-left
    "
  />

  <motion.p
    variants={authorHover.text}
    transition={authorHover.transition}
    className="
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      text-[10px]
      font-medium
      italic
      leading-[15px]
      uppercase
    "
  >
    BY CATHERINE BISHOP
  </motion.p>
</motion.div>

</div>


          {/* Main image */}
<div className="relative h-[341px] w-[628px] overflow-hidden">
  <motion.img
    src="/images/boutique-panerai.svg"
    alt="Panerai Boutique Stuttgart"
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>
        </div>

        {/* Bottom row */}
        <div className="mt-[20px] flex h-[202px] w-[1276px] gap-[20px]">
        {/* Vacheron Constantin card */}
<div className="flex h-[202px] w-[628px] bg-[#F4F4F4]">
  {/* Image */}
  <div className="h-[202px] w-[304px] overflow-hidden">
  <motion.img
    src="/images/boutique-vacheron.svg"
    alt="Vacheron Constantin Boutique Munich"
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

  {/* Text */}
  <div className="relative h-[202px] w-[324px]">
    {/* Bookmark */}

<motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="
    absolute
    right-[16px]
    top-[32.5px]
    z-20
    h-[60px]
    w-[14px]
    cursor-pointer
  "
>
  {/* Обычная закладка */}
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
  />

  {/* Золотая заполненная закладка */}
  <motion.svg
    width="14"
    height="60"
    viewBox="0 0 14 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
    aria-hidden="true"
  >
    <path
      d="M0 0H14V21L7 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  {/* Tooltip */}
  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      pointer-events-none
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      whitespace-nowrap
      border
      border-[#BF985C]
      bg-white
      text-[12px]
      font-normal
      leading-none
      text-[#090909]
    "
  >
    <span className="relative top-px">
      Add article to favourites
    </span>
  </motion.div>
</motion.div>

    {/* Content */}
    <div
      className="
        absolute
        left-[20px]
        top-[32.5px]
        h-[137px]
        w-[288px]
      "
    >
      <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={categoryHover.container}
  className="
    relative
    flex
    h-[15px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={categoryHover.line}
    className="
      absolute
      left-0
      top-1/2
      h-px
      -translate-y-1/2
      bg-[#BF985C]
    "
  />

  <motion.span
    variants={categoryHover.text}
    className="
      text-[11px]
      font-medium
      leading-[15px]
      uppercase
      text-[#404040]
    "
  >
    BOUTIQUE TRAVEL GUIDE
  </motion.span>
</motion.div>

      <motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    cursor-pointer
    text-[24px]
    font-semibold
    leading-[30px]
    text-[#090909]
  "
>
  Vacheron Constantin
  <br />
  Boutique Munich
</motion.h3>

      <motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    absolute
    bottom-0
    left-0
    h-[15px]
    w-[233px]
    cursor-pointer
  "
>
  <motion.span
    aria-hidden="true"
    variants={authorHover.line}
    transition={authorHover.transition}
    className="
      absolute
      bottom-0
      left-0
      h-[15px]
      w-px
      origin-bottom-left
    "
  />

  <motion.p
    variants={authorHover.text}
    transition={authorHover.transition}
    className="
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      text-[10px]
      font-medium
      italic
      leading-[15px]
      uppercase
    "
  >
    BY CATHERINE BISHOP
  </motion.p>
</motion.div>
  </div>

</div>

</div>

{/* Patek Philippe card */}
<div className="flex h-[202px] w-[628px] bg-[#F4F4F4]">
  {/* Image */}
  <div className="h-[202px] w-[304px] overflow-hidden">
  <motion.img
    src="/images/boutique-patek.svg"
    alt="Patek Philippe Boutique Hamburg"
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

  {/* Text */}
  <div className="relative h-[202px] w-[324px]">
    {/* Bookmark */}
<motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="
    absolute
    right-[16px]
    top-[32.5px]
    z-20
    h-[60px]
    w-[14px]
    cursor-pointer
  "
>
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
  />

  <motion.svg
    width="14"
    height="60"
    viewBox="0 0 14 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="
      absolute
      left-0
      top-0
      h-[60px]
      w-[14px]
    "
    aria-hidden="true"
  >
    <path
      d="M0 0H14V21L7 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      pointer-events-none
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      whitespace-nowrap
      border
      border-[#BF985C]
      bg-white
      text-[12px]
      font-normal
      leading-none
      text-[#090909]
    "
  >
    <span className="relative top-px">
      Add article to favourites
    </span>
  </motion.div>
</motion.div>

    {/* Content */}
    <div
      className="
        absolute
        left-[20px]
        top-[32.5px]
        h-[137px]
        w-[288px]
      "
    >
      <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={categoryHover.container}
  className="
    relative
    flex
    h-[15px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={categoryHover.line}
    className="
      absolute
      left-0
      top-1/2
      h-px
      -translate-y-1/2
      bg-[#BF985C]
    "
  />

  <motion.span
    variants={categoryHover.text}
    className="
      text-[11px]
      font-medium
      leading-[15px]
      uppercase
      text-[#404040]
    "
  >
    BOUTIQUE TRAVEL GUIDE
  </motion.span>
</motion.div>

      <motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    cursor-pointer
    text-[24px]
    font-semibold
    leading-[30px]
    text-[#090909]
  "
>
  Patek Philippe Boutique
  <br />
  Hamburg
</motion.h3>

      <motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    absolute
    bottom-0
    left-0
    h-[15px]
    w-[124px]
    cursor-pointer
  "
>
  <motion.span
    aria-hidden="true"
    variants={authorHover.line}
    transition={authorHover.transition}
    className="
      absolute
      bottom-0
      left-0
      h-[15px]
      w-px
      origin-bottom-left
    "
  />

  <motion.p
    variants={authorHover.text}
    transition={authorHover.transition}
    className="
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      text-[10px]
      font-medium
      italic
      leading-[15px]
      uppercase
    "
  >
    BY NICO BANDL
  </motion.p>
</motion.div>
    </div>
  </div>
</div>

</div>
</div>
</section>
  );
}