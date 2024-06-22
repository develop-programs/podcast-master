import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PodcastData: {
  id: string;
  image: string;
  title: string;
  duration: string;
  rating: string;
}[] = [
  {
    id: "1",
    image: "/images/rectangle-6150.png",
    title: "The Futur",
    duration: "1:04:27",
    rating: "460,228",
  },
  {
    id: "2",
    image: "/images/rectangle 6166-1.png",
    title: "Ted Tech",
    duration: "2:04:23",
    rating: "320,731",
  },
  {
    id: "3",
    image: "/images/rectangle 6166-2.png",
    title: "Crazy Genius",
    duration: "1:03:50",
    rating: "274,842",
  },
  {
    id: "4",
    image: "/images/rectangle 6166-3.png",
    title: "Syntax ",
    duration: "3:54:53",
    rating: "110,537",
  },
];

export default function Latest() {
  return (
    <div className="space-y-4 overflow-hidden">
      <div className="w-full flex items-center justify-between">
        <span className="text-lg font-bold">Latest Podcasts</span>
        <Link href="/" className="text-sm font-semibold text-orange-500">
          See All
        </Link>
      </div>
      <div className="w-full grid gap-6 text-white overflow-x-auto">
        {PodcastData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center gap-2 pb-3">
                <div
                  className={cn(
                    "size-6 grid place-content-center",
                    item.id == "4" ? "text-orange-500" : ""
                  )}
                >
                  {item.id == "2" ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        className="size-6"
                      >
                        <path
                          opacity="0.4"
                          d="M11.2283 22.0001C16.409 22.0001 20.6087 17.523 20.6087 12.0001C20.6087 6.47727 16.409 2.00012 11.2283 2.00012C6.04766 2.00012 1.8479 6.47727 1.8479 12.0001C1.8479 17.523 6.04766 22.0001 11.2283 22.0001Z"
                          fill="white"
                        />
                        <path
                          d="M14.0426 10.2301L11.3223 8.56012C10.6469 8.14012 9.8308 8.14012 9.15541 8.56012C8.48002 8.98012 8.07666 9.72012 8.07666 10.5601V13.9101C8.07666 14.7401 8.48002 15.4901 9.15541 15.9101C9.4931 16.1201 9.86832 16.2201 10.2342 16.2201C10.6094 16.2201 10.9752 16.1201 11.3129 15.9101L14.0332 14.2401C14.7086 13.8201 15.112 13.0801 15.112 12.2401C15.1307 11.4001 14.7274 10.6501 14.0426 10.2301Z"
                          fill="white"
                        />
                      </svg>
                    </>
                  ) : (
                    item.id
                  )}
                </div>
                <div className="w-full grid grid-flow-row grid-cols-4">
                  <div className="col-span-2 xl:col-span-3 flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt="image"
                      width={200}
                      height={200}
                      className="size-12"
                    />
                    <span
                      className={cn(
                        item.id == "4" ? "text-orange-500" : "",
                        "text-sm"
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div className="col-span-2 xl:col-span-1 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                      >
                        <path
                          opacity="0.4"
                          d="M2.75006 18.6502C2.34006 18.6502 2.00006 18.3102 2.00006 17.9002V12.2002C1.95006 9.49017 2.96006 6.93017 4.84006 5.01017C6.72006 3.10017 9.24006 2.05017 11.9501 2.05017C17.4901 2.05017 22.0001 6.56017 22.0001 12.1002V17.8002C22.0001 18.2102 21.6601 18.5502 21.2501 18.5502C20.8401 18.5502 20.5001 18.2102 20.5001 17.8002V12.1002C20.5001 7.39017 16.6701 3.55017 11.9501 3.55017C9.64006 3.55017 7.50006 4.44017 5.91006 6.06017C4.31006 7.69017 3.46006 9.86017 3.50006 12.1802V17.8902C3.50006 18.3102 3.17006 18.6502 2.75006 18.6502Z"
                          fill="white"
                        />
                        <path
                          d="M5.94 12.4501H5.81C3.71 12.4501 2 14.1601 2 16.2601V18.1401C2 20.2401 3.71 21.9501 5.81 21.9501H5.94C8.04 21.9501 9.75 20.2401 9.75 18.1401V16.2601C9.75 14.1601 8.04 12.4501 5.94 12.4501Z"
                          fill="white"
                        />
                        <path
                          d="M18.19 12.4501H18.06C15.96 12.4501 14.25 14.1601 14.25 16.2601V18.1401C14.25 20.2401 15.96 21.9501 18.06 21.9501H18.19C20.29 21.9501 22 20.2401 22 18.1401V16.2601C22 14.1601 20.29 12.4501 18.19 12.4501Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-sm">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                      >
                        <path
                          opacity="0.4"
                          d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002Z"
                          fill="white"
                        />
                        <path
                          d="M15.7099 15.9303C15.5799 15.9303 15.4499 15.9003 15.3299 15.8203L12.2299 13.9703C11.4599 13.5103 10.8899 12.5003 10.8899 11.6103V7.51025C10.8899 7.10025 11.2299 6.76025 11.6399 6.76025C12.0499 6.76025 12.3899 7.10025 12.3899 7.51025V11.6103C12.3899 11.9703 12.6899 12.5003 12.9999 12.6803L16.0999 14.5303C16.4599 14.7403 16.5699 15.2003 16.3599 15.5603C16.2099 15.8003 15.9599 15.9303 15.7099 15.9303Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-sm">{item.duration}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        className="size-4"
                      >
                        <path
                          d="M5.1773 12H5.18668H5.1773ZM11.7436 12H11.753H11.7436ZM18.3099 12H18.3193H18.3099ZM6.11534 12C6.11534 12.2652 6.01651 12.5196 5.8406 12.7071C5.66468 12.8946 5.42608 13 5.1773 13C4.92852 13 4.68992 12.8946 4.514 12.7071C4.33809 12.5196 4.23926 12.2652 4.23926 12C4.23926 11.7348 4.33809 11.4804 4.514 11.2929C4.68992 11.1054 4.92852 11 5.1773 11C5.42608 11 5.66468 11.1054 5.8406 11.2929C6.01651 11.4804 6.11534 11.7348 6.11534 12V12ZM12.6816 12C12.6816 12.2652 12.5828 12.5196 12.4069 12.7071C12.231 12.8946 11.9924 13 11.7436 13C11.4948 13 11.2562 12.8946 11.0803 12.7071C10.9044 12.5196 10.8056 12.2652 10.8056 12C10.8056 11.7348 10.9044 11.4804 11.0803 11.2929C11.2562 11.1054 11.4948 11 11.7436 11C11.9924 11 12.231 11.1054 12.4069 11.2929C12.5828 11.4804 12.6816 11.7348 12.6816 12V12ZM19.2479 12C19.2479 12.2652 19.1491 12.5196 18.9732 12.7071C18.7973 12.8946 18.5587 13 18.3099 13C18.0611 13 17.8225 12.8946 17.6466 12.7071C17.4707 12.5196 17.3718 12.2652 17.3718 12C17.3718 11.7348 17.4707 11.4804 17.6466 11.2929C17.8225 11.1054 18.0611 11 18.3099 11C18.5587 11 18.7973 11.1054 18.9732 11.2929C19.1491 11.4804 19.2479 11.7348 19.2479 12V12Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="bg-gray-700" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
