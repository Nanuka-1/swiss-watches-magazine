type HeroSlide = {
  id: number;
  image: string;
  category: string;
  title: string;
  href: string;
};

type HeroContentProps = {
  slide: HeroSlide;
  currentIndex: number;
  total: number;
};

export default function HeroContent({
  slide,
  currentIndex,
  total,
}: HeroContentProps) {
  return (
    <>
      <div className="absolute left-[216px] top-[451px] flex h-[169px] w-[844px] flex-col items-center text-center text-white">
        <p
  className="
    group
    flex
    h-[23px]
    w-[94px]
    items-center
    justify-center
    text-[16px]
    font-medium
    leading-none
    uppercase
    text-white
    transition-colors
    duration-300
    ease-out
    hover:text-[#BF985C]
  "
>
  <span
    aria-hidden="true"
    className="
      mr-0
      h-px
      w-0
      shrink-0
      bg-[#BF985C]
      transition-all
      duration-300
      ease-out
      group-hover:mr-[8px]
      group-hover:w-[12px]
    "
  />

  <span>{slide.category}</span>
</p>

        <h1 className="mt-[16px] w-[844px] text-[20px] font-semibold leading-[36px] uppercase">
          {slide.title}
        </h1>

        <a
  href={slide.href}
  className="
    group
    mt-[16px]
    flex
    h-[40px]
    w-[196px]
    items-center
    justify-center
    border
    border-white
    text-[12px]
    font-medium
    uppercase
    text-white
    transition-colors
    duration-300
    ease-out
    hover:text-[#BF985C]
  "
>
  <span
    aria-hidden="true"
    className="
      mr-0
      h-px
      w-0
      shrink-0
      bg-[#BF985C]
      transition-all
      duration-300
      ease-out
      group-hover:mr-[8px]
      group-hover:w-[12px]
    "
  />

  <span>Read More</span>
</a>
      </div>

      <div className="absolute bottom-[38px] right-[32px] text-[16px] font-medium text-white">
        {currentIndex + 1} / {total}
      </div>
    </>
  );
}