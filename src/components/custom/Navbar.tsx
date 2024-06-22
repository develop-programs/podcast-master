"use client";
import Image from "next/image";
import React from "react";
import data from "@/json/Navbar.json";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../logo";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-full inline-flex flex-col bg-[#15171C] py-4">
      <div className="py-2 px-4">
        <Logo />
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-6">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex justify-between",
                pathname.startsWith(item.href) &&
                  pathname == item.href &&
                  "bg-gradient-to-l from-black/5 to-white/20 bg-opacity-20"
              )}
            >
              <Button
                asChild
                className="inline-flex justify-start gap-3 py-6 bg-transparent hover:bg-transparent text-white"
              >
                <Link href={item.href} className="flex-1">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    className="size-6"
                  />
                  {item.name}
                </Link>
              </Button>
              <div
                className={cn(
                  pathname.startsWith(item.href) &&
                    pathname == item.href &&
                    "w-2 h-full bg-orange-500 rounded-l-2xl"
                )}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full px-6">
        <Button className="w-full bg-orange-500 hover:bg-orange-500/50 py-6 text-base font-semibold text-white">
          Sign In
        </Button>
      </div>
    </div>
  );
}
