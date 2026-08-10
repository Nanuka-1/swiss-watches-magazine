import Image from "next/image";
import { heroSlides } from "./heroSlides";
import HeroContent from "./HeroContent";

export default function Hero() {
  const activeSlide = heroSlides[0];

  return (
    <section className="relative mx-auto h-[647px] w-[1276px] overflow-hidden">
      <Image
        src={activeSlide.image}
        alt={activeSlide.title}
        fill
        className="object-cover"
        priority
      />

      <HeroContent
        slide={activeSlide}
        currentIndex={0}
        total={heroSlides.length}
      />
    </section>
  );
}