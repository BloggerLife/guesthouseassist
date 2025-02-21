"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className="bg-tertiary-light opacity-95 w-[98%] mx-auto px-4 py-6 rounded-lg">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Property Type
          </label>
          {/* <div className="relative"> */}
          <select
            value={roomTypeFilter}
            onChange={handleRoomTypeChange}
            className="w-full px-4 py-3 capitalize rounded leading-tight dark:bg-black focus:outline-none"
          >
            <option value="All">All</option>
            <option value="one">1 Bed</option>
            <option value="two">2 Beds</option>
            <option value="three">3 Beds</option>
            <option value="four">4,5&6 Beds</option>
          </select>
          {/* </div> */}
        </div>

        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
