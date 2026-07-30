"use client";

import { useEffect, useState } from "react";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/luana00gomes-showcase/visits/up")
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? null))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <p className="text-xs text-default-400 mt-2">
      👁 {count.toLocaleString("en-US")} visits
    </p>
  );
};
