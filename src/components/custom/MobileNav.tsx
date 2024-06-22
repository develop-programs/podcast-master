"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import data from "@/json/Navbar.json";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../logo";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col py-5 px-0">
        <div className="py-2 px-4">
          <Logo />
        </div>
        <SheetClose asChild>
          <div className="flex-1 flex flex-col gap-2 mt-6">
            {data.map((item, index) => {
              return (
                <SheetClose key={index} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex justify-between py-4 ps-4",
                      pathname.startsWith(item.href) &&
                        pathname == item.href &&
                        "bg-gradient-to-l from-black/5 to-white/20 bg-opacity-20"
                    )}
                  >
                    <div className="flex-1 flex gap-4">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={50}
                        height={50}
                        className="size-6"
                      />
                      {item.name}
                    </div>
                    <div
                      className={cn(
                        pathname.startsWith(item.href) &&
                          pathname == item.href &&
                          "w-2 h-full bg-orange-500 rounded-l-2xl"
                      )}
                    />
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetClose>
        <div className="w-full px-6">
          <Button className="w-full bg-orange-500 hover:bg-orange-500/50 py-6 text-base font-semibold text-white">
            Sign In
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
