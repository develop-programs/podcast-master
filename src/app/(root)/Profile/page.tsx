import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MyPodcasts from "../(components)/MyPodcasts";

export default function page() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-lg font-bold">Podcaster Profile</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src="/images/image 146.png"
          alt="image"
          width={200}
          height={200}
        />
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M8.03359 1.41676C8.29923 1.17939 8.70077 1.17939 8.96641 1.41676L10.5848 2.86284C10.703 2.96848 10.8536 3.03086 11.0119 3.03976L13.1788 3.16159C13.5345 3.18159 13.8184 3.46552 13.8384 3.82119L13.9602 5.9881C13.9691 6.1464 14.0315 6.29698 14.1372 6.41521L15.5832 8.03359C15.8206 8.29923 15.8206 8.70077 15.5832 8.96641L14.1372 10.5848C14.0315 10.703 13.9691 10.8536 13.9602 11.0119L13.8384 13.1788C13.8184 13.5345 13.5345 13.8184 13.1788 13.8384L11.0119 13.9602C10.8536 13.9691 10.703 14.0315 10.5848 14.1372L8.96641 15.5832C8.70077 15.8206 8.29923 15.8206 8.03359 15.5832L6.41521 14.1372C6.29698 14.0315 6.1464 13.9691 5.9881 13.9602L3.82119 13.8384C3.46552 13.8184 3.18159 13.5345 3.16159 13.1788L3.03976 11.0119C3.03086 10.8536 2.96848 10.703 2.86284 10.5848L1.41676 8.96641C1.17939 8.70077 1.17939 8.29923 1.41676 8.03359L2.86284 6.41521C2.96848 6.29698 3.03086 6.1464 3.03976 5.9881L3.16159 3.82119C3.18159 3.46552 3.46552 3.18159 3.82119 3.16159L5.9881 3.03976C6.1464 3.03086 6.29698 2.96848 6.41521 2.86284L8.03359 1.41676Z"
                fill="#13A8F2"
              />
              <path
                d="M5.875 8.875L7.375 10.375L11.125 6.625"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-sm">verified</span>
          </div>
          <div className="space-y-3">
            <span className="text-2xl md:text-4xl font-bold">@podcaster</span>
            <div className="flex gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path
                  opacity="0.4"
                  d="M2.74982 18.65C2.33982 18.65 1.99982 18.31 1.99982 17.9V12.2C1.94982 9.49005 2.95982 6.93005 4.83982 5.01005C6.71982 3.10005 9.23982 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56005 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39005 16.6698 3.55005 11.9498 3.55005C9.63982 3.55005 7.49982 4.44005 5.90982 6.06005C4.30982 7.69005 3.45982 9.86005 3.49982 12.18V17.89C3.49982 18.31 3.16982 18.65 2.74982 18.65Z"
                  fill="white"
                />
                <path
                  d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
                  fill="white"
                />
                <path
                  d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm">93,525,192 monthly listeners</span>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-500/70 py-6 text-white text-xs lg:text-lg font-semibold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M14.5752 7.99995L4.66683 13.975C4.0835 14.325 3.3335 13.9083 3.3335 13.225V6.55828C3.3335 3.64995 6.47516 1.83328 9.00016 3.28328L12.8252 5.48328L14.5668 6.48328C15.1418 6.82495 15.1502 7.65828 14.5752 7.99995Z"
                fill="white"
              />
              <path
                d="M15.075 12.8834L11.7 14.8334L8.33334 16.775C7.125 17.4667 5.75834 17.325 4.76667 16.625C4.28334 16.2917 4.34167 15.55 4.85001 15.25L15.4417 8.90003C15.9417 8.60003 16.6 8.88337 16.6917 9.45837C16.9 10.75 16.3667 12.1417 15.075 12.8834Z"
                fill="white"
              />
            </svg>
            Play Random Podcast
          </Button>
        </div>
      </div>
      <MyPodcasts />
    </div>
  );
}
