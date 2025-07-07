'use client'
import { cn } from "@/lib/utils";
import React from "react";


import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchooltestimonials = [
  {
    quote:
      "Joining this music school was the best decision of my life. I found not just instructors, but mentors who truly care about my growth as an artist.",
    name: "Aarav Mehta",
    title: "Piano Student",
  },
  {
    quote:
      "I never thought I'd be able to compose my own music. The structured learning and creative freedom here have helped me find my own sound.",
    name: "Riya Sen",
    title: "Music Composition Program",
  },
  {
    quote:
      "The vocal training classes helped me unlock parts of my voice I didn’t know existed. Now I feel confident performing on stage.",
    name: "Neha Kapoor",
    title: "Vocal Performance Student",
  },
  {
    quote:
      "What sets this school apart is the focus on both technique and expression. It’s not just about playing notes — it’s about telling stories through sound.",
    name: "Siddharth Rao",
    title: "Guitar Student",
  },
  {
    quote:
      "Whether you're a beginner or an advanced musician, the personalized approach and supportive environment make this the perfect place to grow.",
    name: "Anjali Deshmukh",
    title: "Alumni - Music Production",
  },
];


function MusicSchoolTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10 ">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
        items={musicSchooltestimonials}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonialCards