"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="max-w-6xl mx-auto flex justify-between px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        placeholder="Search Keywords...."
        className="w-full h-14 outline-none rounded-md placeholder-gray-500 bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
