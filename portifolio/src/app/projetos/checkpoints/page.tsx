"use client";

import CategoryFilter from "@/components/CategoryFilter";

export default function CheckpointPage() {
  return (
    <div className="h-[100vh] px-4 py-8 flex flex-col items-center">
      <CategoryFilter category="Checkpoint" />
    </div>
  );
}
