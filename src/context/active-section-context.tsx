"use client";

import React, { createContext, useContext, useState } from "react";

import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider(
  props: ActiveSectionContextProviderProps
) {
  const { children } = props;
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // We need to keep track of this to disable the observer temporarily when a user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Hook used to return our context value
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used with a ActiveSectionContextProvider"
    );
  }
  return context;
}
