"use client";

import { useState } from "react";

type Props = {
  className?: string;
};

export default function Logo({ className = "h-9 w-auto" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="heading text-xl tracking-wide text-white">
        Best Puff <span className="text-ember-400">Tobacco</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/Logo.PNG"
      alt="Best Puff Tobacco"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
