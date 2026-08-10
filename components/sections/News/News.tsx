"use client";

import { motion } from "framer-motion";
import { imageHover } from "../../animations/imageHover";
import { categoryHover } from "../../animations/categoryHover";
import { buttonHover } from "@/components/animations/buttonHover";
import { titleHover } from "@/components/animations/titleHover";
import { bookmarkHover } from "@/components/animations/bookmarkHover";
import { authorHover } from "@/components/animations/authorHover";


export default function News() {
  return (
    <section className="mx-auto mt-[354px] w-[1276px]">
      <div className="relative flex h-[40px] w-full justify-between">
        {/* Section title */}
        <div className="relative h-[40px] w-[844px]">
          <h2
            className="
              text-[26px]
              font-medium
              leading-none
              tracking-[0]
              uppercase
              text-[#090909]
            "
          >
            News
          </h2>

          {/* Underline: total 76px */}
          <div
            className="
              absolute
              left-0
              top-[38px]
              flex
              h-px
              w-[76px]
            "
          >
            <span className="h-px w-[31px] shrink-0 bg-[#BF985C]" />

            <span className="h-px w-[45px] shrink-0 bg-[#090909]/20" />
          </div>
        </div>

        {/* View all button */}
<motion.button
  type="button"
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={{
    initial: {
      borderColor: "#404040",
    },

    hover: {
      borderColor: "#BF985C",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    rest: {
      borderColor: "#404040",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  className="
    flex
    h-[40px]
    w-[174px]
    items-center
    justify-center
    border
    border-[#404040]
    px-[10px]
  "
>
  <motion.span
    variants={categoryHover.line}
    className="h-px shrink-0 bg-[#BF985C]"
  />

  <motion.span
    variants={categoryHover.text}
    className="
      whitespace-nowrap
      text-[14px]
      font-normal
      leading-[34px]
      tracking-[0]
      uppercase
      text-[#090909]
    "
  >
    View all news
  </motion.span>
</motion.button>
    </div>

      {/* Cards */}
<div className="mt-[40px] flex gap-[20px]">

  {/* Card 1 */}
  <article className="w-[304px]">

    <div className="h-[222px] w-[302px] overflow-hidden">
  <motion.img
    src="/images/news-1.svg"
    alt="2026: Rolex Prices Rise And Others Follow Suit"
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

    <div className="mt-[20px]">

{/* Category + bookmark */}
<div className="relative h-[15px]">
  <motion.div
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={categoryHover.container}
    className="absolute left-0 top-0 flex h-[15px] cursor-pointer items-center"
  >
    <motion.span
  variants={categoryHover.line}
  className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#BF985C]"
/>

<motion.span
  variants={categoryHover.text}
  className="
    text-[12px]
    font-medium
    uppercase
    text-[#404040]
  "
>
  INDUSTRY NEWS
</motion.span>
  </motion.div>

  <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="absolute right-0 top-0 z-20 h-[61px] w-[15px] cursor-pointer"
>
  {/* Обычный bookmark — контур */}
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
  />

  {/* Hover bookmark — полностью заполненный */}
  <motion.svg
    width="15"
    height="61"
    viewBox="0 0 15 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
    aria-hidden="true"
  >
    <path
      d="M0 0H15V21L7.5 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  {/* Tooltip */}
  <motion.div
  variants={bookmarkHover.tooltip}
  className="
    absolute
    right-0
    top-[25px]
    z-30
    flex
    h-[31px]
    w-[150px]
    items-center
    justify-center
    border
    border-[#BF985C]
    bg-white
    whitespace-nowrap
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
</div>

{/* Title */}
<motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    h-[93px]
    cursor-pointer
    text-[21px]
    font-medium
    leading-[30px]
    text-[#090909]
  "
>
  2026: Rolex Prices Rise And Others Follow Suit
</motion.h3>

      {/* Description */}
      <p
        className="
          mt-[10px]
          h-[77px]
          font-['Bitter']
          text-[15px]
          leading-[26px]
          text-[#404040]
        "
      >
        From 20 to 23 February 2026, the Munich trade fair Inhorgenta
        invited the watch and jewellery industry to the Munich Exhibit...
      </p>

      {/* Author */}
<motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    relative
    mt-[30px]
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
  BY ANTJE HEEPMANN
</motion.p>
</motion.div>

    </div>

  </article>

  {/* Card 2 */}
<article className="w-[304px] shrink-0">
  <div className="h-[222px] w-[302px] overflow-hidden">

  <motion.img
    src="/images/news-2.svg"
    alt=""
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

  {/* Category + bookmark */}
<div className="relative mt-[20px] h-[15px]">
  <motion.div
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={categoryHover.container}
    className="absolute left-0 top-0 flex h-[15px] cursor-pointer items-center"
  >
    <motion.span
      variants={categoryHover.line}
      className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#BF985C]"
    />

    <motion.span
      variants={categoryHover.text}
      className="
        text-[12px]
        font-medium
        uppercase
        text-[#404040]
      "
    >
      NOVELTIES
    </motion.span>
  </motion.div>

  <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="absolute right-0 top-0 z-20 h-[61px] w-[15px] cursor-pointer"
>
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
  />

  <motion.svg
    width="15"
    height="61"
    viewBox="0 0 15 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
    aria-hidden="true"
  >
    <path
      d="M0 0H15V21L7.5 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      border
      border-[#BF985C]
      bg-white
      whitespace-nowrap
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
</div>

{/* Title */}
    <motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    h-[93px]
    cursor-pointer
    text-[21px]
    font-medium
    leading-[30px]
    text-[#090909]
  "
>
  Purple Reign: Glashütte Original Brings The Sixties to Life in Shades of Purple
</motion.h3>

    {/* Description */}
    <p
      className="
        mt-[10px]
        h-[77px]
        font-['Bitter']
        text-[15px]
        font-normal
        leading-[26px]
        text-[#404040]
      "
    >
      The Sixties series has been an integral part of Glashütte Original’s
      ‘Vintage’ collection for years. Since 2018, the annual editio...
    </p>

    {/* Author */}
<motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    relative
    mt-[30px]
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
  BY ANTJE HEEPMANN
</motion.p>
</motion.div>

</article>

{/* Card 3 */}
<article className="w-[304px]">

  <div className="h-[222px] w-[302px] overflow-hidden">
  <motion.img
    src="/images/news-3.svg"
    alt=""
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

  <div className="mt-[20px]">

    {/* Category + bookmark */}
<div className="relative mt-[20px] h-[15px]">
  <motion.div
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={categoryHover.container}
    className="absolute left-0 top-0 flex h-[15px] cursor-pointer items-center"
  >
    <motion.span
      variants={categoryHover.line}
      className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#BF985C]"
    />

    <motion.span
      variants={categoryHover.text}
      className="
        text-[12px]
        font-medium
        uppercase
        text-[#404040]
      "
    >
      BOUTIQUE TRAVEL GUIDE
    </motion.span>
  </motion.div>

  <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="absolute right-0 top-0 z-20 h-[61px] w-[15px] cursor-pointer"
>
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
  />

  <motion.svg
    width="15"
    height="61"
    viewBox="0 0 15 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
    aria-hidden="true"
  >
    <path
      d="M0 0H15V21L7.5 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      border
      border-[#BF985C]
      bg-white
      whitespace-nowrap
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
</div>

    {/* Title */}
<motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    h-[93px]
    cursor-pointer
    text-[21px]
    font-medium
    leading-[30px]
    text-[#090909]
  "
>
  Van Cleef & Arpels Boutique Frankfurt
</motion.h3>

    {/* Description */}
    <p
  className="
    mt-[10px]
    h-[77px]
    font-['Bitter']
    text-[15px]
    font-normal
    leading-[26px]
    text-[#404040]
  "
>
      Swisswatches is launching its first ‘Boutique Travel Guide’ for its
      watch community. In this section, we want to ...
    </p>

    {/* Authors */}
<div className="mt-[30px] flex items-center gap-[20px]">

  {/* Author 1 */}
  <motion.div
    initial="default"
    animate="default"
    whileHover="hover"
    variants={authorHover.container}
    className="
      relative
      h-[15px]
      w-[130px]
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
      ANTJE HEEPMANN
    </motion.p>
  </motion.div>

  {/* Author 2 */}
  <motion.div
    initial="default"
    animate="default"
    whileHover="hover"
    variants={authorHover.container}
    className="
      relative
      h-[15px]
      w-[110px]
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
      EMILIA HOTH
        </motion.p>
  </motion.div>

</div>

</div>

</article>

{/* Card 4 */}
<article className="w-[304px]">

  <div className="h-[222px] w-[302px] overflow-hidden">
  <motion.img
    src="/images/news-4.svg"
    alt=""
    className="h-full w-full object-cover"
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={imageHover}
  />
</div>

  <div className="mt-[20px]">

    {/* Category + bookmark */}
<div className="relative mt-[20px] h-[15px]">
  <motion.div
    initial="initial"
    animate="rest"
    whileHover="hover"
    variants={categoryHover.container}
    className="absolute left-0 top-0 flex h-[15px] cursor-pointer items-center"
  >
    <motion.span
      variants={categoryHover.line}
      className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#BF985C]"
    />

    <motion.span
      variants={categoryHover.text}
      className="
        text-[12px]
        font-medium
        uppercase
        text-[#404040]
      "
    >
      NOVELTIES
    </motion.span>
  </motion.div>

  <motion.div
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="absolute right-0 top-0 z-20 h-[61px] w-[15px] cursor-pointer"
>
  <motion.img
    src="/images/bookmark.svg"
    alt=""
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
  />

  <motion.svg
    width="15"
    height="61"
    viewBox="0 0 15 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0 h-[61px] w-[15px]"
    aria-hidden="true"
  >
    <path
      d="M0 0H15V21L7.5 15.3L0 21V0Z"
      fill="#BF985C"
    />
  </motion.svg>

  <motion.div
    variants={bookmarkHover.tooltip}
    className="
      absolute
      right-0
      top-[25px]
      z-30
      flex
      h-[31px]
      w-[150px]
      items-center
      justify-center
      border
      border-[#BF985C]
      bg-white
      whitespace-nowrap
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
</div>

    {/* Title */}
    <motion.h3
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={titleHover}
  className="
    mt-[20px]
    h-[93px]
    cursor-pointer
    text-[21px]
    font-medium
    leading-[30px]
    text-[#090909]
  "
>
  Hermès Arceau Samarcande: A Minute Repeater With a Horse’s Head
</motion.h3>

    {/* Description */}
    <p
      className="
        mt-[10px]
        h-[77px]
        font-['Bitter']
        text-[15px]
        font-normal
        leading-[26px]
        text-[#404040]
      "
    >
      Any watch can tell the time, but some can also chime it. This is
      precisely what a minute repeater does: it audibly announ...
    </p>

    {/* Author */}
<motion.div
  initial="default"
  animate="default"
  whileHover="hover"
  variants={authorHover.container}
  className="
    relative
    mt-[30px]
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
    BY MORITZ SPECKHAHN
  </motion.p>
</motion.div>

  </div>

</article>

</div>
    </section>
  );
}