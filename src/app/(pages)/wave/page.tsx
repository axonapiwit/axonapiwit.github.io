"use client"

import React, { useState } from "react";
import ItemLayout from "@/components/about/ItemLayout";
import Tabs from "@/components/tabs";
import WaveDotBackground from "@/components/WaveDotBackground";

const WavePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Overview"); // Default tab

  // ข้อมูลเนื้อหาในแต่ละแท็บ (ใช้ ReactNode แทนข้อความ)
  const tabContent: Record<
    string,
    { left: React.ReactNode; right: React.ReactNode }
  > = {
    Overview: {
      left: (
        <div>
          <h2 className="text-xl font-bold">Overview Section</h2>
          <p>This is the overview content for the left.</p>
        </div>
      ),
      right: (
        <div>
          <h3 className="text-lg font-semibold">Clients Worldwide</h3>
          <p>We have 25+ clients worldwide!</p>
        </div>
      ),
    },
    Details: {
      left: (
        <div>
          <h2 className="text-xl font-bold">Details Section</h2>
          <ul>
            <li>Feature 1: Detailed stats</li>
            <li>Feature 2: Advanced analysis</li>
          </ul>
        </div>
      ),
      right: (
        <div>
          <h3 className="text-lg font-semibold">Global Reach</h3>
          <p>Trusted by top companies globally.</p>
        </div>
      ),
    },
    Reviews: {
      left: (
        <div>
          <h2 className="text-xl font-bold">User Reviews</h2>
          <blockquote>
            &quot;This product has changed my life!&quot; - Happy User
          </blockquote>
        </div>
      ),
      right: (
        <div>
          <h3 className="text-lg font-semibold">Positive Feedback</h3>
          <p>We have over 1,000+ positive reviews!</p>
        </div>
      ),
    },
  };

  return (
    <section>
      <WaveDotBackground />
      <section className="py-20 w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        >
          <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
            {/* Left */}
            <ItemLayout
              className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            >
              <Tabs onTabChange={(tab) => setSelectedTab(tab)} />
              <h1 className="text-3xl font-bold text-center">{selectedTab}</h1>
              {tabContent[selectedTab].left}
            </ItemLayout>

            {/* Right */}
            <ItemLayout
              className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
            >
              {tabContent[selectedTab].right}
            </ItemLayout>
          </div>
        </ItemLayout>
      </section>

    </section>
  );
};

export default WavePage;
