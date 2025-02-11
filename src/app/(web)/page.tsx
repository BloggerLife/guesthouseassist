import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";
import Link from "next/link";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <div className="flex px-4 items-center gap-12 container mx-auto">
        <Link href="/rooms">
          <button className="btn-primary">Show More Properties</button>
        </Link>
      </div>
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
