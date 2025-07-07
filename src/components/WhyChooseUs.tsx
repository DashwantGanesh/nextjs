"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Collaborative Music Production",
    description:
      "Create music together in real time with producers, artists, and engineers. Share ideas, layer tracks, and make instant adjustments. Our platform enables seamless collaboration from anywhere in the world.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--violet-500))] text-white">
        Collaborative Music Production
      </div>
    ),
  },
  {
    title: "Live Track Editing",
    description:
      "Make edits and hear changes instantly. With real-time track editing, you can fine-tune every beat, vocal, and instrument without waiting. Keep the creative momentum going without delay.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/music-editing-demo.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live track editing demo"
        />
      </div>
    ),
  },
  {
    title: "Version History for Tracks",
    description:
      "Never lose your best take again. Our version control system lets you revisit previous versions of your tracks, compare edits, and restore anytime. Perfect for tracking creative evolution.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track Version History
      </div>
    ),
  },
 
];



function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs