import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";
import Link from "next/link";
import Rooms from "@/components/Rooms/Rooms";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Rooms />
      <Link href="/rooms">
        <div className="flex justify-center items-center h-full">
          <p className="font-bold lg:text-xl text-tertiary-dark">
            Show More Properties
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <BsArrowDownCircleFill className="text-tertiary-dark " />
        </div>
      </Link>
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
