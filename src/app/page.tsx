"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../public/background/home-background2.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";


export default function Home() {
  const [isNavigationLoaded, setNavigationLoaded] = useState(false);
  const [Wizard, setWizard] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavigationLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isNavigationLoaded) {
      const loadWizard = async () => {
        const wizardModule = await import("@/components/models/Wizard");
        setWizard(() => wizardModule.default);
      };
      loadWizard();
    }
  }, [isNavigationLoaded]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-bottom opacity-80"
      />

      <div className="w-full h-screen">
        <Navigation />
        {isNavigationLoaded && Wizard && (
          <RenderModel>
            <Wizard />
          </RenderModel>
        )}
      </div>
    </main>
  );
}
