import React from "react";
import Trending from "./(components)/Trending";
import Latest from "./(components)/Latest";
import Popular from "./(components)/Popular";

export default function page() {
  return (
    <div className="space-y-6">
      <Trending />
      <Latest />
      <Popular />
    </div>
  );
}
