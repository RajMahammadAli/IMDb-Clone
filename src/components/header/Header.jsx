import React from "react";
import MenuItem from "../menuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch";

export default function Header() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <MenuItem title="HOME" address="/" Icon={AiFillHome} />
            <MenuItem
              title="ABOUT"
              address="/about"
              Icon={BsFillInfoCircleFill}
            />
          </div>
          <div className="flex items-center gap-4">
            <DarkModeSwitch />
            <Link href="/">
              <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
                IMDb
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
