import { NewPodcast } from "@/components/Forms/NewPodcast";
import React from "react";

export default function page() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-lg font-bold">Create New Podcast</span>
      </div>
      <div>
        <NewPodcast />
      </div>
    </div>
  );
}
