"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "your",
    },
    {
      text: "Trust",
    },
    {
      text: "with",
    },
    {
      text: "VerifyFin.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to seamless experience starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
          href="/chatbot"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
