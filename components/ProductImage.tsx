"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ProductImage({ src, alt }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-900">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent" />
    </div>
  );
}
