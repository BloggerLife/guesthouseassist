"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";

import ThemeContext from "@/context/themeContext";
import Image from "next/image";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:1/3">
        <ul className="flex items-center">
          <li className="flex items-center">
            <Link
              href="/"
              className="font-black text-tertiary-dark flex items-center"
            >
              <Image
                src="/images/logo.jpg"
                alt="logo"
                width={20}
                height={20}
                className="h-16 w-16 rounded-full"
              />
              <span className="px-2 font-bold text-2xl">GuestHouseAssist</span>
            </Link>
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Properties</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/studio">Admin</Link>
        </li>
        <li className="flex items-center">
          {session?.user ? (
            <Link href={`/users/${session.user.id}`}>
              {session.user.image ? (
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={session.user?.image}
                    alt={session.user?.name!}
                    width={40}
                    height={40}
                    className="scale-animation img"
                  />
                </div>
              ) : (
                <FaUserCircle className="cursor-pointer" />
              )}
            </Link>
          ) : (
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
