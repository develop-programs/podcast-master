import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Data: { title: string; subtitle: string; image: string }[] = [
  {
    title: "Waveform",
    subtitle: "MKBHD",
    image: "/images/image 146.png",
  },
  {
    title: "Joe Rogan Experience",
    subtitle: "Joe Rogan",
    image: "/images/Podcast-iNfo-1.png",
  },
  {
    title: "GV Audio Experience",
    subtitle: "Gary Vee",
    image: "/images/Podcast-iNfo-2.png",
  },
  {
    title: "Impaulsive",
    subtitle: "Logan Paul",
    image: "/images/Podcast-iNfo.png",
  },
  {
    title: "Waveform",
    subtitle: "MKBHD",
    image: "/images/image 146.png",
  },
  {
    title: "GV Audio Experience",
    subtitle: "Gary Vee",
    image: "/images/Podcast-iNfo-2.png",
  },
  {
    title: "Impaulsive",
    subtitle: "Logan Paul",
    image: "/images/Podcast-iNfo.png",
  },
  {
    title: "Waveform",
    subtitle: "MKBHD",
    image: "/images/image 146.png",
  },
  {
    title: "GV Audio Experience",
    subtitle: "Gary Vee",
    image: "/images/Podcast-iNfo-2.png",
  },
];

export default function Trending() {
  return (
    <div className="grid gap-4">
      <div>
        <span className="text-lg font-bold">Trending Podcasts</span>
      </div>
      <div className="grid place-content-center">
        <Carousel className="max-w-[20rem] md:max-w-[40rem] lg:max-w-[55rem] xl:max-w-[60rem] 2xl:max-w-6xl">
          <CarouselContent>
            {Data.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/3 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="grid gap-2">
                    <Image
                      src={item.image}
                      alt="image"
                      width={200}
                      height={200}
                      className="w-full aspect-square"
                    />
                    <div className="grid gap-0.5">
                      <span className="text-sm">{item.title}</span>
                      <span className="text-xs text-gray-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            variant="ghost"
            className="text-white hover:bg-transparent hover:text-white"
          />
          <CarouselNext
            variant="ghost"
            className="text-white hover:bg-transparent hover:text-white"
          />
        </Carousel>
      </div>
    </div>
  );
}
