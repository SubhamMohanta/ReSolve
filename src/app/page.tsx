"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Navbar from "../ui/components/Navbar";
import * as SubframeCore from "@subframe/core";
import { Button } from "../ui";
import Image from "next/image";

function IconWrapper() {
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setIcon(<SubframeCore.Icon name="FeatherMouse" />);
  }, []);

  return icon;
}

function Landing() {
  const [scrollLines, setScrollLines] = useState(0);
  const [showExploreBtn, setExploreBtn] = useState(false);
  const [hideWatermark, sethideWatermark] = useState(false);


  const handleScroll = (event: WheelEvent) => {
    const linesScrolled = Math.round(event.deltaY / 70); // Adjust sensitivity
    setScrollLines((prev) => {
      const newScrollLines = prev + linesScrolled;
      setExploreBtn(newScrollLines >= 51);
      sethideWatermark(newScrollLines >= 54);

      return newScrollLines;
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full flex-col bg-white">
        <div className="flex flex-1 flex-col pt-48 items-center justify-between">
          <div className="text-center flex flex-col gap-3">
            <span>
              <span className="text-heading-1 font-heading-1 text-neutral-950 block">
                Resolving issue made easier
              </span>
              <span className="text-body font-body text-neutral-500">
                Problem-solving through collaborative reporting and real-time data insights
              </span>
            </span>
            <span className="flex items-center justify-center">
              <Button variant="brand-primary">Explore more</Button>
            </span>
          </div>
          <div className="w-screen flex items-center justify-center relative">
            <Image src="https://res.cloudinary.com/dzgttn1mr/image/upload/v1742185178/Community_1-1535x450_udjp89.png" width={1535} height={450} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
