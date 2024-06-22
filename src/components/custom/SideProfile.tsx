import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SideProfile() {
  return (
    <div className="h-full w-full inline-flex flex-col gap-8 px-5 py-4 bg-[#15171C]">
      <div className="w-full flex justify-between items-center text-white">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">Shadcn</span>
        </div>
        <Button className="bg-transparent hover:bg-transparent p-0" asChild>
          <Link href="/Profile">
            <svg
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6 stroke-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        <div className="text-white flex justify-between items-center">
          <span>Fans Also Like</span>
          <Link href={"/"} className="text-orange-400 text-base">
            See All
          </Link>
        </div>
        <div className="relative h-72 rounded-2xl">
          <Image
            src="/images/img.png"
            alt="image"
            width={1000}
            height={1000}
            className="object-cover h-full w-full rounded-2xl"
          />
          <div className="absolute bottom-0 rounded-b-2xl w-full bg-gray-600/60 backdrop-blur-md py-4 px-3 grid">
            <span>Shadcn</span>
            <span>5.5k Followers</span>
          </div>
        </div>
        <div className="w-full py-2 flex gap-3 justify-center">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div
                  className={cn(
                    "size-2 bg-white/50 rounded-full",
                    index == 0 && "bg-white"
                  )}
                  key={index}
                />
              );
            })}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="text-white flex justify-between items-center">
          <span>Top Podcasters</span>
          <Link href={"/"} className="text-orange-400 text-base">
            See All
          </Link>
        </div>
        <div className="w-full space-y-3 text-white">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="flex gap-3 items-center" key={index}>
                  <Avatar className="rounded-md">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid gap-1">
                    <span className="text-sm font-bold">Shadcn</span>
                    <span className="text-xs text-slate-300">
                      5.5k Followers
                    </span>
                  </div>
                  <div>
                    <span className="text-xs">34 Podcasts</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
