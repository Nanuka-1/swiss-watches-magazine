"use client";



import CuratedHero from "./CuratedHero";
import CuratedList from "./CuratedList";
import { curatedHero, curatedList } from "./curated";

export default function CuratedBy() {
  return (
    <section className="mx-auto mt-[333px] w-[1276px]">
      <div className="flex h-[40px] items-center justify-between">

        {/* Left */}
        <div className="relative h-[40px] w-[844px]">
          <h2
            className="
              h-[19px]
              w-[306px]
              text-[26px]
              font-medium
              leading-[19px]
              tracking-[0]
              uppercase
              text-[#090909]
            "
          >
            Curated By
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
      <div className="mt-[40px] flex gap-[20px]">
  <CuratedHero
    image={curatedHero.image}
    category={curatedHero.category}
    title={curatedHero.title}
    author={curatedHero.author}
  />

  <CuratedList items={curatedList} />
</div>
    </section>
  );
}