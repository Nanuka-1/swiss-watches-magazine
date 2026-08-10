"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { latestStories } from "./stories";

export default function LatestStories() {
  const story = latestStories[0];
  const secondStory = latestStories[1];
  const thirdStory = latestStories[2];

  return (
    <section className="mx-auto mt-[352px] w-[1276px]">
      {/* Section header */}
      <div className="flex h-[40px] items-center justify-between">
        {/* Left */}
        <div className="relative h-[40px] w-[844px]">
          <h2 className="h-[19px] text-[26px] font-medium leading-[19px] uppercase text-[#090909]">
            Latest Stories
          </h2>

          <div className="absolute bottom-0 left-0 h-px w-[195px]">
            <div className="absolute inset-0 bg-[#090909]/20" />
            <div className="absolute left-0 top-0 h-px w-[110px] bg-[#BF985C]" />
          </div>
        </div>

        {/* Right */}
        <button
  type="button"
  className="
    group/view-all
    flex
    h-[40px]
    w-[196px]
    items-center
    justify-center
    border
    border-[#222222]
    bg-transparent
    px-[10px]
    text-[14px]
    font-normal
    leading-[34px]
    uppercase
    text-[#090909]
    transition-colors
    duration-300
    ease-out
    hover:border-[#BF985C]
    hover:text-[#BF985C]
    hover:duration-1000
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
      group-hover/view-all:mr-[8px]
      group-hover/view-all:w-[12px]
      group-hover/view-all:duration-1000
    "
  />

  <span
    className="
      transition-colors
      duration-300
      ease-out
      group-hover/view-all:text-[#BF985C]
      group-hover/view-all:duration-1000
    "
  >
    View All Articles
  </span>
</button>
      </div>
      {/* Cards */}
     <div className="mt-[20px] flex gap-[20px]">
        <article className="w-[412px]">
          {/* Image */}
          <div className="group/image relative h-[250px] w-[412px] overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority
              sizes="412px"
              className="
                object-cover
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/image:scale-[1.08]
              "
            />
          </div>

          {/* Content */}
          <div className="h-[299px] w-[412px] bg-[#F4F4F4]">
            <div className="px-[20px] pt-[15px]">
              {/* Category + bookmark */}
              <div className="relative h-[15px]">
                <button
                  type="button"
                  className="
                    group/category
                    relative
                    flex
                    h-[15px]
                    w-[70px]
                    items-center
                    overflow-visible
                    text-left
                    text-[12px]
                    font-medium
                    leading-[15px]
                    tracking-normal
                    uppercase
                    text-[#404040]
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
                    {story.category}
                  </span>
                </button>

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

              {/* Title */}
              <h3
                className="
                  mt-[23px]
                  h-[89px]
                  w-[372px]
                  overflow-hidden
                  text-[21px]
                  font-medium
                  leading-[30px]
                  text-[#090909]
                  transition-colors
                  duration-300
                  ease-out
                  hover:text-[#BF985C]
                "
              >
                {story.title}
              </h3>

              {/* Description */}

<p
  className="
    mt-[10px]
    h-[78px]
    w-[372px]
    overflow-hidden
    font-[family-name:var(--font-bitter)]
    text-[15px]
    font-normal
    leading-[26px]
    tracking-normal
    text-[#404040]
  "
>
  {story.description}
</p>

            {/* Author */}
<motion.div
  initial="default"
  whileHover="hover"
  className="
    relative
    mt-[30px]
    h-[15px]
    w-[233px]
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
      text-[10px]
      font-medium
      italic
      leading-[15px]
      uppercase
    "
  >
    By {story.author}
  </motion.p>
</motion.div>
            </div>
          </div>
        </article>

        <article className="w-[412px]">
  {/* Image */}
  <div className="group/image relative h-[250px] w-[412px] overflow-hidden">
    <Image
      src={secondStory.image}
      alt={secondStory.title}
      fill
      sizes="412px"
      className="
        object-cover
        transition-transform
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover/image:scale-[1.08]
      "
    />
  </div>

  {/* Content */}
  <div className="h-[299px] w-[412px] bg-[#F4F4F4]">
    <div className="px-[20px] pt-[15px]">
      {/* Category + bookmark */}
      <div className="relative h-[15px]">
        <button
          type="button"
          className="
            group/category
            relative
            flex
            h-[15px]
            w-[113px]
            items-center
            overflow-visible
            text-left
            text-[12px]
            font-medium
            leading-[15px]
            tracking-normal
            uppercase
            text-[#404040]
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
            {secondStory.category}
          </span>
        </button>

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

      {/* Title */}
      <h3
        className="
          mt-[23px]
          h-[89px]
          w-[372px]
          overflow-hidden
          text-[21px]
          font-medium
          leading-[30px]
          text-[#090909]
          transition-colors
          duration-300
          ease-out
          hover:text-[#BF985C]
        "
      >
        {secondStory.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[10px]
          h-[78px]
          w-[372px]
          overflow-hidden
          font-[family-name:var(--font-bitter)]
          text-[15px]
          font-normal
          leading-[26px]
          tracking-normal
          text-[#404040]
        "
      >
        {secondStory.description}
      </p>

      {/* Author */}
      <motion.div
        initial="default"
        whileHover="hover"
        className="
          relative
          mt-[30px]
          h-[15px]
          w-[233px]
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
            text-[10px]
            font-medium
            italic
            leading-[15px]
            uppercase
          "
        >
          By {secondStory.author}
        </motion.p>
      </motion.div>
    </div>
  </div>
</article>

     <article className="w-[412px]">
  {/* Image */}
<div className="group/image relative h-[250px] w-[412px] overflow-hidden">
  <Image
    src={thirdStory.image}
    alt={thirdStory.title}
    fill
    sizes="412px"
    className="
      object-cover
      transition-transform
      duration-1000
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover/image:scale-[1.08]
    "
  />

  </div>

  {/* Content */}
  <div className="h-[299px] w-[412px] bg-[#F4F4F4]">
    <div className="px-[20px] pt-[15px]">
      {/* Category + bookmark */}
      <div className="relative h-[15px]">
        <button
          type="button"
          className="
            group/category
            relative
            flex
            h-[15px]
            w-[176px]
            items-center
            overflow-visible
            text-left
            text-[12px]
            font-medium
            leading-[15px]
            tracking-normal
            uppercase
            text-[#404040]
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
            {thirdStory.category}
          </span>
        </button>

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

      {/* Title */}
      <h3
        className="
          mt-[23px]
          h-[89px]
          w-[372px]
          overflow-hidden
          text-[21px]
          font-medium
          leading-[30px]
          text-[#090909]
          transition-colors
          duration-300
          ease-out
          hover:text-[#BF985C]
        "
      >
        {thirdStory.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[10px]
          h-[78px]
          w-[372px]
          overflow-hidden
          font-[family-name:var(--font-bitter)]
          text-[15px]
          font-normal
          leading-[26px]
          tracking-normal
          text-[#404040]
        "
      >
        {thirdStory.description}
      </p>

      {/* Author */}
      <motion.div
        initial="default"
        whileHover="hover"
        className="
          relative
          mt-[30px]
          h-[15px]
          w-[233px]
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
            text-[10px]
            font-medium
            italic
            leading-[15px]
            uppercase
          "
        >
          By {thirdStory.author}
        </motion.p>
      </motion.div>
    </div>
  </div>
</article>
      </div>
    </section>
  );
}