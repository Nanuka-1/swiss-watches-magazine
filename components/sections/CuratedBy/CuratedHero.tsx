"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CuratedHeroProps = {
  image: string;
  category: string;
  title: string;
  author: string;
};

export default function CuratedHero({
  image,
  category,
  title,
  author,
}: CuratedHeroProps) {
  return (
    <article className="group/image relative h-[402px] w-[628px] overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    sizes="628px"
    className="
      object-cover
      transition-transform
      duration-1000
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover/image:scale-[1.15]
    "
  />

      <div className="absolute inset-0 bg-black/45" />

      <button
  type="button"
  aria-label="Add article to favourites"
  className="
    group/bookmark
    absolute
    right-[20px]
    top-[20px]
    z-10
    flex
    h-[24px]
    w-[18px]
    items-start
    justify-center
  "
>
  <svg
    viewBox="0 0 14 22"
    className="h-[22px] w-[14px]"
    aria-hidden="true"
  >
    <path
      d="M1 1H13V20L7 16L1 20V1Z"
      fill="transparent"
      stroke="#FFFFFF"
      strokeWidth="1"
      className="
        transition-colors
        duration-300
        ease-out
        group-hover/bookmark:fill-[#BF985C]
        group-hover/bookmark:stroke-[#BF985C]
      "
    />
  </svg>

  <span
    className="
      pointer-events-none
      absolute
      right-0
      top-[34px]
      z-10
      hidden
      h-[36px]
      w-[178px]
      items-center
      justify-center
      border
      border-[#BF985C]
      bg-white
      text-[12px]
      font-normal
      text-[#090909]
      group-hover/bookmark:flex
    "
  >
    Add article to favourites
  </span>
</button>

      <div
  className="
    absolute
    left-1/2
    top-1/2
    flex
    w-[520px]
    -translate-x-1/2
    -translate-y-1/2
    flex-col
    items-center
    gap-[20px]
    text-center
    text-white
  "
>
  <button
    type="button"
    className="
      group/category
      relative
      flex
      h-[15px]
      items-center
      overflow-visible
      text-left
      text-[12px]
      font-medium
      leading-[15px]
      uppercase
      text-white
    "
  >
    <span
      aria-hidden="true"
      className="
        absolute
        left-0
        top-1/2
        h-px
        w-0
        -translate-y-1/2
        bg-[#BF985C]
        transition-all
        duration-400
        ease-out
        group-hover/category:w-[10px]
      "
    />

    <span
      className="
        whitespace-nowrap
        transition-all
        duration-400
        ease-out
        group-hover/category:translate-x-[14px]
        group-hover/category:text-[#BF985C]
      "
    >
      {category}
    </span>
  </button>

  <h3
    className="
      w-[520px]
      text-[24px]
      font-medium
      leading-[36px]
      transition-colors
      duration-300
      ease-out
      hover:text-[#BF985C]
    "
  >
    {title}
  </h3>

  <motion.div
  initial="default"
  whileHover="hover"
  className="
    relative
    h-[15px]
    w-fit
  "
>
  <motion.span
    aria-hidden="true"
    variants={{
      default: {
        rotate: 0,
        backgroundColor: "#404040",
      },
      hover: {
        rotate: 90,
        backgroundColor: "#BF985C",
      },
    }}
    transition={{
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    }}
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
    variants={{
      default: {
        x: 0,
        color: "#FFFFFF",
      },
      hover: {
        x: 15,
        color: "#BF985C",
      },
    }}
    transition={{
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    }}
    className="
      ml-[8px]
      whitespace-nowrap
      text-[10px]
      font-normal
      italic
      leading-[15px]
      uppercase
    "
  >
    By {author}
  </motion.p>
</motion.div>
</div>


    </article>
  );
}