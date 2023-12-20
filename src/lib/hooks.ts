import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { ThemeContext } from "@/context/theme-context-provider";

interface useSectionInViewProps {
  sectionName: SectionName;
  threshold?: number;
}

export function useSectionInView(props: useSectionInViewProps) {
  const { sectionName, threshold = 0.75 } = props;

  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used with a ActiveSectionContextProvider"
    );
  }
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
