"use client";
import React from "react";
import { Progress } from "../ui/progress";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Player() {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full py-4 bg-black/70 backdrop-blur-lg text-white",
        visible ? "block" : "hidden"
      )}
    >
      <Progress value={25} className="h-1 absolute top-0 w-full" />
      <div className="flex w-full h-full justify-between items-center px-12">
        <div className="flex items-center gap-4">
          <Image
            src="/images/rectangle-6150.png"
            alt="logo"
            width={100}
            height={100}
            className="size-12"
          />
          <div className="grid">
            <span className="text-base font-semibold">Liam Swtichs</span>
            <span className="text-xs text-gray-400">Liam Debugger</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <Button size="icon" className="bg-transparent hover:bg-transparent">
            <Image
              src="/images/icon-vuesax-bulk-shuffle.svg"
              alt="logo"
              width={20}
              height={20}
              className="size-6"
            />
          </Button>

          <div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2"
            >
              <Image
                src="/images/icon-vuesax-bulk-backward.svg"
                alt="logo"
                width={20}
                height={20}
                className="size-8"
              />
              <span className="text-sm font-bold">-15</span>
            </Button>
          </div>
          <Button
            size="icon"
            className="bg-white hover:bg-white/80 rounded-full size-12"
          >
            <Image
              src="/images/icon-vuesax-bold-pause.svg"
              alt="logo"
              width={20}
              height={20}
              className="size-6"
            />
          </Button>

          <div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2"
            >
              <span className="text-sm font-bold">+15</span>
              <Image
                src="/images/icon-vuesax-bulk-forward.svg"
                alt="logo"
                width={20}
                height={20}
                className="size-8"
              />
            </Button>
          </div>

          <Button size="icon" className="bg-transparent hover:bg-transparent">
            <Image
              src="/images/icon-vuesax-bold-repeate-one.svg"
              alt="logo"
              width={20}
              height={20}
              className="size-6"
            />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs lg:text-sm">1:45 / 4:32</span>
          <div className="flex w-auto items-center gap-2">
            <Image
              src="/images/icon-vuesax-bulk-volume-high.svg"
              alt="logo"
              width={100}
              height={100}
              className="size-6"
            />
            <Progress value={50} className="hidden lg:block w-24 flex-1 h-1" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-transparent"
            onClick={() => setVisible(!visible)}
          >
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
