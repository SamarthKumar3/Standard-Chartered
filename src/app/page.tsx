"use client";

import { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import next from "next";
import Script from 'next/script';
export default function Page() {
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
      className: "text-blue-500 dark:text-blue-500 overflow-hidden",
    },
  ];

  const [showChatbot, setShowChatbot] = useState(false);

  const handleGetStartedClick = () => {
    setShowChatbot(true);
  };

  useEffect(() => {
    if (showChatbot) {
      document.getElementById("hero")?.classList.add("dark");
    } else {
      document.getElementById("hero")?.classList.remove("dark");
    }

    return () => {
      document.getElementById("hero")?.classList.remove("dark");
    };
  }, [showChatbot]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[40rem] overflow-hidden"
        id="hero"
      >
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base overflow-hidden ">
          The road to seamless experience starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            className="w-40 h-10 px-9 py-2 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            onClick={handleGetStartedClick}
          >
            Get started
          </button>
        </div>
      </div>
      {showChatbot && (
        <div className="fixed bottom-4 right-4 w-1/3">
          <div
            id="tars-fullpage-container"
            className="tars-fullpage-container-class rounded-lg "
          >
            <iframe
              id="tars-fullpage"
              width="100%"
              height="100%"
              allow="geolocation; microphone; camera; midi; encrypted-media;"
              src="https://chatbot.hellotars.com/conv/lh-bkU/"
            ></iframe>
          </div>
          <Script src="https://tars-file-upload.s3.amazonaws.com/bulb/js/fullpage.js"></Script>
        </div>
      )}
    </>
  );
}
