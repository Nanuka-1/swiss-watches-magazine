"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CuratedListItemProps = {
  image: string;
  title: string;
  author: string;
};

export default function CuratedListItem({
  image,
  title,
  author,
}: CuratedListItemProps) {
  return (
    <article className="relative flex h-[120px] w-[628px]">
      <div className="group/image relative h-[120px] w-[181px] shrink-0 overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    sizes="181px"
    className="
      object-cover
      transition-transform
      duration-1000
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover/image:scale-[1.15]
    "
  />
</div>

      <div className="relative h-[120px] flex-1 bg-white pl-[20px] pt-[10px]">
       <div className="flex w-[394px] flex-col items-start gap-[10px]">
  <h3
  className="
    w-[394px]
    font-[family-name:var(--font-jost)]
    text-[16px]
    font-medium
    leading-[24px]
    tracking-[0]
    text-[#090909]

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
    w-[226px]
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
        color: "#404040",
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
      absolute
      left-[8px]
      top-0
      whitespace-nowrap
      font-[family-name:var(--font-jost)]
      text-[10px]
      font-medium
      italic
      leading-[15px]
      tracking-[0]
      uppercase
    "
  >
    By {author}
  </motion.p>
</motion.div>
</div>

  <button
  type="button"
  aria-label="Add article to favourites"
  className="
    group/bookmark
    absolute
    right-0
    top-0
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
      stroke="#404040"
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
</div>
    </article>
  );
}