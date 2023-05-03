"use client";

import { useEffect, useState } from "react";

function Video() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 600)
    }
  }, [])

  if (isMobile) return null;

  return (
    <video
      autoPlay
      muted
      loop
      className="-mt-8 -right-4 absolute z-0 pointer-events-none [mask-image:linear-gradient(to_top,transparent_5%,#18181B_25%)] opacity-80 object-cover 3xl:w-[calc(100%-500px)]"
    >
      <source
        src="https://uploadthing.com/f/30f015ae-6bc9-4854-9842-4e6006e0bf9d_demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
