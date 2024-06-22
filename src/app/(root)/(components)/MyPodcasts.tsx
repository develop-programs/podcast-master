import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function MyPodcasts() {
  return (
    <div className="space-y-6">
      <div className="w-full flex justify-between items-center">
        <span className="text-lg font-bold">My Podcasts</span>
        <Button
          variant="ghost"
          size="sm"
          className="bg-slate-800/60 hover:text-white flex items-center gap-3"
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
