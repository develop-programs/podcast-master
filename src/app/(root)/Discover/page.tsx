import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-8 space-y-6 text-white">
      <div className="flex items-center gap-4 py-4 px-6 bg-[#15171C] rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="size-6"
        >
          <path
            d="M9.58332 17.5C13.9556 17.5 17.5 13.9555 17.5 9.58329C17.5 5.21104 13.9556 1.66663 9.58332 1.66663C5.21107 1.66663 1.66666 5.21104 1.66666 9.58329C1.66666 13.9555 5.21107 17.5 9.58332 17.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 18.3333L16.6667 16.6666"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Type here to search"
          className="w-full bg-transparent outline-none focus-visible:outline-none text-white"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Discover Community Podcasts</span>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-transparent hover:text-white flex items-center gap-3"
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
          >
            <path
              d="M4.5 9.5H13.5M2.25 5H15.75M6.75 14H11.25"
              stroke="#71788B"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Apply Filter
        </Button>
      </div>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {[
          "/podcasts/Podcast-Info-1.png",
          "/podcasts/Podcast-Info-2.png",
          "/podcasts/Podcast-Info-3.png",
          "/podcasts/Podcast-Info-4.png",
          "/podcasts/Podcast-Info-5.png",
          "/podcasts/Podcast-Info-6.png",
          "/podcasts/Podcast-Info-7.png",
          "/podcasts/Podcast-Info-8.png",
          "/podcasts/Podcast-Info-9.png",
          "/podcasts/Podcast-Info-10.png",
          "/podcasts/Podcast-Info-11.png",
          "/podcasts/Podcast-Info.png",
        ].map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={item}
                alt="image"
                width={500}
                height={500}
                className="w-full aspect-square object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
