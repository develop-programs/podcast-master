import Image from "next/image";
import React from "react";

export default function Popular() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-lg font-bold">Poppular Podcasts</span>
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
        ].map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={item}
                alt="image"
                width={500}
                height={500}
                className="w-full aspect-square"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
