import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import LatestStories from "@/components/sections/LatestStories/LatestStories";
import EditorialCategories from "@/components/sections/EditorialCategories/EditorialCategories";
import CuratedBy from "@/components/sections/CuratedBy/CuratedBy";
import News from "@/components/sections/News/News";
import Newsletter from "@/components/sections/Newsletter/Newsletter";
import BoutiqueTravelGuide from "@/components/sections/BoutiqueTravelGuide/BoutiqueTravelGuide";
import Videos from "@/components/sections/Videos/Videos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LatestStories />
      <EditorialCategories />
      <CuratedBy />
      <News />
      <Newsletter />
      <BoutiqueTravelGuide />
      <Videos />
    </>
  );
}

