"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { authorHover } from "../../animations/authorHover";
import { bookmarkHover } from "@/components/animations/bookmarkHover";

export default function Videos() {
  return (
    <section
      className="
        mt-[377.58px]
        h-[569px]
        w-full
        bg-[#303030]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-[1276px]
          pt-[40px]
        "
      >
        {/* Left column */}
        <div className="w-[412px]">
          <div className="w-[412px]">

            {/* Section title */}
            <h2
              className="
                text-[24px]
                font-semibold
                leading-[29px]
                text-white
              "
            >
              VIDEOS
            </h2>

            {/* underline */}
            <div className="mt-[20px] flex h-px w-[143px]">
              <span className="h-px w-[48px] bg-[#FBB64D]" />
              <span className="h-px w-[95px] bg-[#DDDDDD]" />
            </div>

            {/* Main heading */}
            <div
              className="
                mt-[38px]
                h-[119px]
                w-[412px]
              "
            >
              <h3
                className="
                  text-[24px]
                  font-medium
                  leading-[30px]
                  text-white
                "
              >
                Our dynamic and informative videos
                <br />
                explore exciting new products and
                <br />
                personalities from within the watch
                <br />
                industry
              </h3>
            </div>

            {/* Description */}
<p
  className="
    mt-[10px]
    h-[82px]
    w-[412px]
    font-['Bitter']
    text-[16px]
    font-normal
    leading-[26px]
    text-[#DDDDDD]
  "
>
  From in-depth movement studies to brand
  <br />
  retrospectives — our video essays bring mechanical
  <br />
  watchmaking to life with cinematic precision.
</p>


{/* Statistics */}
<div
  className="
    mt-[40px]
    flex
    h-[38px]
    w-[304px]
    items-start
  "
>
  {/* Episodes */}
  <div className="h-[38px] w-[55px]">
    <p
      className="
        h-[19px]
        text-[18px]
        font-semibold
        leading-[19px]
        text-white
      "
    >
      140+
    </p>

    <p
      className="
        mt-[10px]
        h-[9px]
        text-[12px]
        font-normal
        leading-[9px]
        text-[#DDDDDD]
      "
    >
      EPISODES
    </p>
  </div>

  {/* Divider */}
  <span
    aria-hidden="true"
    className="
      ml-[20px]
      h-[38px]
      w-px
      bg-[#BF985C]
    "
  />

  {/* Subscribers */}
  <div className="ml-[20px] h-[38px] w-[72px]">
    <p
      className="
        h-[19px]
        text-[18px]
        font-semibold
        leading-[19px]
        text-white
      "
    >
      82K
    </p>

    <p
      className="
        mt-[10px]
        h-[9px]
        text-[12px]
        font-normal
        leading-[9px]
        text-[#DDDDDD]
      "
    >
      SUBSCRIBERS
    </p>
  </div>
</div>{/* Subscribe button */}
{/* Subscribe button */}
<motion.button
  type="button"
  initial={{ backgroundColor: "#DDDDDD" }}
  whileHover={{ backgroundColor: "#BF985C" }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative
    mt-[20px]
    h-[51px]
    w-[304px]
    cursor-pointer
  "
>
  <img
    src="/images/youtube-logo.svg"
    alt=""
    className="
      absolute
      left-[49px]
      top-[9.5px]
      h-[32px]
      w-[32px]
    "
  />

  <span
    className="
      absolute
      left-[91px]
      top-[8.5px]
      whitespace-nowrap
      text-[14px]
      font-medium
      leading-[34px]
      text-[#090909]
    "
  >
    SUBSCRIBE ON YOUTUBE
  </span>
</motion.button>
{/* Info row */}
  <div
    className="
      mt-[20px]
      flex
      h-[32px]
      w-[304px]
      items-center
      gap-[15px]
    "
  >
    <img
      src="/images/info.svg"
      alt=""
      className="
        h-[32px]
        w-[32px]
      "
    />

    <p
      className="
        h-[21px]
        w-[257px]
        font-['Bitter']
        text-[14px]
        font-normal
        leading-[32px]
        text-[#DDDDDD]
      "
    >
      New episodes every Thursday
    </p>
  </div>
</div>
          </div>


 {/* Divider */}
<div
  className="
    mt-[2px]
    mb-[44px]
    h-[483px]
    w-px
    shrink-0
    bg-[#535352]
  "
/>

{/* Right column */}
<div className="relative h-full flex-1">
  {/* Latest Videos */}
  <p
    className="
      absolute
      left-[20px]
      top-[12px]
      h-[15px]
      w-[102px]
      whitespace-nowrap
      text-[16px]
      font-normal
      leading-[15px]
      text-[#DDDDDD]
    "
  >
    Latest Videos
  </p>

  {/* 5 VIDEOS */}
  <div
    className="
      absolute
      left-[132px]
      top-[8px]
      flex
      h-[23px]
      w-[88px]
      items-center
      justify-center
      border
      border-[#FBB64D]
    "
  >
    <span
      className="
        whitespace-nowrap
        text-[12px]
        font-normal
        leading-[12px]
        text-[#FBB64D]
      "
    >
      5 VIDEOS
    </span>
  </div>

  {/* View all videos */}
<motion.button
  type="button"
  initial="rest"
  whileHover="hover"
  animate="rest"
  variants={{
    rest: {
      borderColor: "#DDDDDD",
    },
    hover: {
      borderColor: "#BF985C",
    },
  }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    absolute
    right-0
    top-[-1px]
    flex
    h-[40px]
    w-[196px]
    items-center
    justify-center
    border
    bg-transparent
  "
>
  <div className="flex items-center justify-center">
    <motion.span
      variants={{
        rest: {
          width: 0,
          marginRight: 0,
        },
        hover: {
          width: 12,
          marginRight: 10,
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        block
        h-px
        shrink-0
        bg-[#BF985C]
      "
    />

    <motion.span
      variants={{
        rest: {
          color: "#DDDDDD",
        },
        hover: {
          color: "#BF985C",
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        whitespace-nowrap
        text-[12px]
        font-normal
        leading-[22px]
      "
    >
      VIEW ALL VIDEOS
    </motion.span>
  </div>
</motion.button>



{/* First video card */}
<div
  className="
    absolute
    left-[20px]
    top-[81px]
    h-[332px]
    w-[304px]
  "
>
 {/* Image */}
<div className="relative h-[202px] w-[304px] overflow-hidden">

  {/* Animated image */}
  <motion.div
    className="absolute inset-0"
    whileHover={{ scale: 1.15 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <Image
      src="/images/video-1.svg"
      alt="Interview with Nicola Andreatta"
      fill
      className="object-cover"
    />
  </motion.div>

  {/* Play button */}
  <div
    className="
      absolute
      left-[126px]
      top-[83px]
      flex
      h-[36.16px]
      w-[51.78px]
      items-center
      justify-center
      rounded-[6px]
      bg-[#D70004]
    "
  >
    <div
      className="
        ml-[2px]
        h-0
        w-0
        border-y-[8px]
        border-l-[12px]
        border-y-transparent
        border-l-white
      "
    />
  </div>

  {/* Duration */}
  <div
    className="
      absolute
      left-[247px]
      top-[179px]
      flex
      h-[23px]
      items-center
      justify-center
      bg-[#222222]
      px-[10px]
    "
  >
    <span
      className="
        whitespace-nowrap
        text-[12px]
        font-medium
        leading-[12px]
        text-white
      "
    >
      18:42
    </span>
  </div>

</div>

{/* Card content */}
<div
  className="
    relative
    mt-[20px]
    h-[110px]
    w-[304px]
  "
>
  {/* Category */}
<motion.div
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="
    flex
    h-[15px]
    w-[212px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={{
      rest: {
        width: 0,
        marginRight: 0,
      },
      hover: {
        width: 13,
        marginRight: 7,
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block h-px shrink-0 bg-[#BF985C]"
  />

  <motion.span
    variants={{
      rest: {
        color: "#DDDDDD",
      },
      hover: {
        color: "#BF985C",
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[12px]
      font-normal
      uppercase
      leading-[15px]
    "
  >
    VIDEO
  </motion.span>
</motion.div>

  {/* Bookmark */}
<motion.button
  type="button"
  aria-label="Bookmark video"
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="
    absolute
    right-0
    top-0
    z-10
    h-[60px]
    w-[14px]
    bg-transparent
    p-0
  "
>
  {/* Outline bookmark */}
  <motion.svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0"
  >
    <path
      d="M1 1H13V22L7 17.8L1 22V1Z"
      stroke="#DDDDDD"
      strokeWidth="1"
    />
  </motion.svg>

  {/* Filled bookmark */}
  <motion.svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0"
  >
    <path
      d="M1 1H13V22L7 17.8L1 22V1Z"
      fill="#BF985C"
      stroke="#BF985C"
      strokeWidth="1"
    />
  </motion.svg>

  {/* Tooltip */}
  <motion.span
    variants={bookmarkHover.tooltip}
    className="
      absolute
      right-0
      top-[32px]
      z-20
      w-max
      whitespace-nowrap
      border
      border-[#BF985C]
      bg-white
      px-[10px]
      py-[6px]
      text-[12px]
      font-normal
      normal-case
      leading-[15px]
      text-[#090909]
    "
  >
    Add article to favourites
  </motion.span>
</motion.button>

  {/* Title */}
<motion.h3
  className="
    mt-[10px]
    h-[50px]
    w-[288px]
    overflow-hidden
    text-[18px]
    font-medium
    leading-[25px]
  "
  initial={{ color: "#FFFFFF" }}
  whileHover={{ color: "#BF985C" }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Interview with Nicola Andreatta
  <br />
  CEO of Roger Dubuis | Lamborgh...
</motion.h3>

  {/* Author */}
<motion.div
  initial="default"
  whileHover="hover"
  className="
    relative
    mt-[20px]
    h-[15px]
    w-[233px]
    cursor-pointer
  "
>
  {/* Line */}
  <motion.span
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

  {/* Author text */}
  <motion.span
    variants={{
      default: {
        ...authorHover.text.default,
        color: "#DDDDDD",
      },
      hover: authorHover.text.hover,
    }}
    transition={authorHover.transition}
    className="
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      text-[10px]
      font-normal
      italic
      uppercase
      leading-[15px]
    "
  >
    BY ZURAB ZAZASHVILI
  </motion.span>
</motion.div>
</div>
</div> {/* First video card */}

{/* Second video card */}
<div
  className="
    absolute
    left-[344px]
    top-[81px]
    h-[332px]
    w-[304px]
  "
>
  {/* Image */}
<div className="relative h-[202px] w-[304px] overflow-hidden">

  {/* Animated image */}
  <motion.div
    className="absolute inset-0"
    whileHover={{ scale: 1.15 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <Image
      src="/images/video-2.svg"
      alt="Breitling’s neue Super AVI Kollektion mit Fred Mandelbaum"
      fill
      className="object-cover"
    />
  </motion.div>

  {/* Play button */}
  <div
    className="
      absolute
      left-[126px]
      top-[83px]
      flex
      h-[36.16px]
      w-[51.78px]
      items-center
      justify-center
      rounded-[6px]
      bg-[#D70004]
    "
  >
    <div
      className="
        ml-[2px]
        h-0
        w-0
        border-y-[8px]
        border-l-[12px]
        border-y-transparent
        border-l-white
      "
    />
  </div>

  {/* Duration */}
  <div
    className="
      absolute
      left-[247px]
      top-[179px]
      flex
      h-[23px]
      items-center
      justify-center
      bg-[#222222]
      px-[10px]
    "
  >
    <span
      className="
        whitespace-nowrap
        text-[12px]
        font-medium
        leading-[12px]
        text-white
      "
    >
      30:24
    </span>
  </div>

</div>
  {/* Card content */}
<div
  className="
    relative
    mt-[20px]
    h-[110px]
    w-[304px]
  "
>
  {/* Category */}
<motion.div
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="
    flex
    h-[15px]
    w-[212px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={{
      rest: {
        width: 0,
        marginRight: 0,
      },
      hover: {
        width: 13,
        marginRight: 7,
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block h-px shrink-0 bg-[#BF985C]"
  />

  <motion.span
    variants={{
      rest: {
        color: "#DDDDDD",
      },
      hover: {
        color: "#BF985C",
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[12px]
      font-normal
      uppercase
      leading-[15px]
    "
  >
    VIDEO
  </motion.span>
</motion.div>

  {/* Bookmark */}
<motion.button
  type="button"
  aria-label="Bookmark video"
  initial="initial"
  animate="rest"
  whileHover="hover"
  variants={bookmarkHover.container}
  className="
    absolute
    right-0
    top-0
    z-10
    h-[60px]
    w-[14px]
    bg-transparent
    p-0
  "
>
  {/* Outline bookmark */}
  <motion.svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    variants={bookmarkHover.outlineIcon}
    className="absolute left-0 top-0"
  >
    <path
      d="M1 1H13V22L7 17.8L1 22V1Z"
      stroke="#DDDDDD"
      strokeWidth="1"
    />
  </motion.svg>

  {/* Filled bookmark */}
  <motion.svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    variants={bookmarkHover.filledIcon}
    className="absolute left-0 top-0"
  >
    <path
      d="M1 1H13V22L7 17.8L1 22V1Z"
      fill="#BF985C"
      stroke="#BF985C"
      strokeWidth="1"
    />
  </motion.svg>

  {/* Tooltip */}
  <motion.span
    variants={bookmarkHover.tooltip}
    className="
      absolute
      right-0
      top-[32px]
      z-20
      w-max
      whitespace-nowrap
      border
      border-[#BF985C]
      bg-white
      px-[10px]
      py-[6px]
      text-[12px]
      font-normal
      normal-case
      leading-[15px]
      text-[#090909]
    "
  >
    Add article to favourites
  </motion.span>
</motion.button>

  {/* Title */}
<motion.h3
  className="
    mt-[10px]
    h-[50px]
    w-[288px]
    overflow-hidden
    text-[18px]
    font-medium
    leading-[25px]
  "
  initial={{ color: "#FFFFFF" }}
  whileHover={{ color: "#BF985C" }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Breitling’s neue Super AVI
  <br />
  Kollektion mit Fred Mandelbaum...
</motion.h3>

  {/* Author */}
<motion.div
  initial="default"
  whileHover="hover"
  className="
    relative
    mt-[20px]
    h-[15px]
    w-[233px]
    cursor-pointer
  "
>
  {/* Line */}
  <motion.span
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

  {/* Author text */}
<motion.span
  variants={{
    default: {
      ...authorHover.text.default,
      color: "#DDDDDD",
    },
    hover: authorHover.text.hover,
  }}
  transition={authorHover.transition}
  className="
    absolute
    left-[8px]
    top-0
    whitespace-nowrap
    text-[10px]
    font-normal
    italic
    uppercase
    leading-[15px]
  "
>
  BY ZURAB ZAZASHVILI
</motion.span>
</motion.div>
</div>
</div>

{/* Third video card */}
<div
  className="
    absolute
    left-[668px]
    top-[81px]
    h-[332px]
    w-[304px]
    opacity-20
  "
>
  {/* Image */}
<div className="relative h-[202px] w-[304px] overflow-hidden">

  {/* Animated image */}
  <motion.div
    className="absolute inset-0"
    whileHover={{ scale: 1.15 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <Image
      src="/images/video-3.svg"
      alt="Catching up with Breitling CEO Georges Kern"
      fill
      className="object-cover"
    />
  </motion.div>

  {/* Play button */}
  <div
    className="
      absolute
      left-[126px]
      top-[83px]
      flex
      h-[36.16px]
      w-[51.78px]
      items-center
      justify-center
      rounded-[6px]
      bg-[#D70004]
    "
  >
    <div
      className="
        ml-[2px]
        h-0
        w-0
        border-y-[8px]
        border-l-[12px]
        border-y-transparent
        border-l-white
      "
    />
  </div>

</div>

  {/* Card content */}
  <div
    className="
      relative
      mt-[20px]
      h-[110px]
      w-[304px]
    "
  >
    {/* Category */}
<motion.div
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="
    flex
    h-[15px]
    w-[212px]
    cursor-pointer
    items-center
  "
>
  <motion.span
    variants={{
      rest: {
        width: 0,
        marginRight: 0,
      },
      hover: {
        width: 13,
        marginRight: 7,
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block h-px shrink-0 bg-[#BF985C]"
  />

  <motion.span
    variants={{
      rest: {
        color: "#DDDDDD",
      },
      hover: {
        color: "#BF985C",
      },
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[12px]
      font-normal
      uppercase
      leading-[15px]
    "
  >
    VIDEO
  </motion.span>
</motion.div>

    {/* Bookmark */}
    <button
      type="button"
      aria-label="Bookmark video"
      className="
        absolute
        right-0
        top-0
        flex
        h-[60px]
        w-[14px]
        items-start
        justify-center
        bg-transparent
        p-0
      "
    >
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1 1H13V22L7 17.8L1 22V1Z"
          stroke="#DDDDDD"
          strokeWidth="1"
        />
      </svg>
    </button>

    {/* Title */}
<motion.h3
  className="
    mt-[10px]
    h-[50px]
    w-[288px]
    overflow-hidden
    text-[18px]
    font-medium
    leading-[25px]
  "
  initial={{ color: "#FFFFFF" }}
  whileHover={{ color: "#BF985C" }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Catching up with Breitling
  <br />
  Georges Kern
</motion.h3>

{/* Author */}
<motion.div
  initial="default"
  whileHover="hover"
  className="
    relative
    mt-[20px]
    h-[15px]
    w-[233px]
    cursor-pointer
  "
>
  {/* Line */}
  <motion.span
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

  {/* Author text */}
  <motion.span
    variants={{
      default: {
        ...authorHover.text.default,
        color: "#DDDDDD",
      },
      hover: authorHover.text.hover,
    }}
    transition={authorHover.transition}
    className="
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      text-[10px]
      font-normal
      italic
      uppercase
      leading-[15px]
    "
  >
    BY ZURAB ZAZASHVILI
  </motion.span>
</motion.div>
  </div>
</div>

</div> {/* Right column */}

</div> {/* Main container */}

</section>
  );
}