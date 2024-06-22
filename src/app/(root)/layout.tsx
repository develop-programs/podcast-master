import MobileNav from "@/components/custom/MobileNav";
import Navbar from "@/components/custom/Navbar";
import Player from "@/components/custom/Player";
import RightSideNav from "@/components/custom/RightSideNav";
import SideProfile from "@/components/custom/SideProfile";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen grid grid-flow-row grid-cols-12">
      <div className="absolute w-full xl:hidden top-0 left-0 py-6 px-4 bg-black/30 backdrop-blur-md flex justify-between items-center">
        <MobileNav />
        <RightSideNav />
      </div>
      <div className="hidden xl:block xl:col-span-3 2xl:col-span-2 border-r border-black">
        <Navbar />
      </div>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-8 border-r border-black overflow-hidden">
        <div className="h-full xl:p-4 px-4 pt-24 pb-4 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
      <div className="hidden xl:block xl:col-span-3 2xl:col-span-2 border-r border-black">
        <SideProfile />
      </div>
      <Player />
    </div>
  );
}
