import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="w-full flex justify-center">
      <Image src="/Spinner.svg" alt="spinner"></Image>
    </div>
  );
}
