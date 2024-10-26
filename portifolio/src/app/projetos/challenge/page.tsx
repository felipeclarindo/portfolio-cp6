"use client";

import CategoryFilter from "@/components/CategoryFilter";

export default function ChallengePage() {
  return (
    <div className="h-[100vh] px-4 py-8 flex flex-col items-center">
      <CategoryFilter category="Challenge" />
    </div>
  );
}
