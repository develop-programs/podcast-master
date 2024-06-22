"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RightSideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col pt-12 px-4 space-y-4">
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
      </SheetContent>
    </Sheet>
  );
}
