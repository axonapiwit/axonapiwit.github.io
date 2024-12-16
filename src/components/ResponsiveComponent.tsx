"use client";

import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

interface ResponsiveComponentProps {
  children: (props: { size: number | undefined }) => React.ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
