import React from "react";
import NavbarItem from "../navbarItem/NavbarItem";

export default function Navbar() {
  return (
    <div className="bg-amber-100 dark:bg-gray-400 lg:text-lg p-4 flex justify-center gap-6">
      <NavbarItem title="Trending" param="fetchtRending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
