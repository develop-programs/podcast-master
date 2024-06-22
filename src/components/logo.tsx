import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="size-12"
      />
      <span className="text-3xl font-bold">PodcastBook</span>
    </div>
  );
}
