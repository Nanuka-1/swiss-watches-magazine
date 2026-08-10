"use client";

import Image from "next/image";

type Props = {
  icon: string;
  category: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

export default function EditorialCategoryCard({
  icon,
  category,
  title,
  description,
  button,
  href,
}: Props) {
  return (
    <article className="flex w-[304px] flex-col items-center">
      {/* Icon */}
      <div className="relative h-[80px] w-[98px]">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>

      {/* Category */}
      <button
        type="button"
        className="
          group/category
          relative
          mt-[18px]
          flex
          h-[15px]
          w-fit
          items-center
          overflow-visible
          font-[family-name:var(--font-jost)]
          text-[11px]
          font-normal
          leading-[15px]
          tracking-[0.02em]
          uppercase
          text-[#DDDDDD]
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
            bg-[#FBB64D]
            transition-all
            duration-300
            ease-out
            group-hover/category:duration-1000
            group-hover/category:ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover/category:w-[13px]
          "
        />

        <span
          className="
            whitespace-nowrap
            text-[#DDDDDD]
            transition-all
            duration-300
            ease-out
            group-hover/category:duration-1000
            group-hover/category:ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover/category:translate-x-[17px]
            group-hover/category:text-[#FBB64D]
          "
        >
          {category}
        </span>
      </button>

      {/* Title */}
      <h3
        className="
          mt-[8px]
          h-[29px]
          text-center
          font-[family-name:var(--font-jost)]
          text-[20px]
          font-medium
          leading-[30px]
          uppercase
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[15px]
          h-[40px]
          text-center
          font-[family-name:var(--font-bitter)]
          text-[14px]
          leading-[22px]
          text-[#DDDDDD]
        "
      >
        {description}
      </p>

      {/* Button */}
      <a
        href={href}
        className="
          group/read-more
          mt-[40px]
          flex
          h-[40px]
          w-[196px]
          items-center
          justify-center
          border
          border-[#DDDDDD]
          bg-transparent
          px-[10px]
          text-[12px]
          font-normal
          uppercase
          text-[#DDDDDD]
          transition-colors
          duration-300
          ease-out
          hover:border-[#BF985C]
          hover:text-[#BF985C]
          hover:duration-1000
          hover:ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <span
          aria-hidden="true"
          className="
            h-px
            w-0
            shrink-0
            bg-[#BF985C]
            transition-all
            duration-300
            ease-out
            group-hover/read-more:mr-[8px]
            group-hover/read-more:w-[12px]
            group-hover/read-more:duration-1000
            group-hover/read-more:ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        />

        <span
          className="
            transition-colors
            duration-300
            ease-out
            group-hover/read-more:duration-1000
            group-hover/read-more:ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        >
          {button}
        </span>
      </a>
    </article>
  );
}