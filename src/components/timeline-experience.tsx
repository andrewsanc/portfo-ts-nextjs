"use client";

import { useTheme } from "@/lib/hooks";
import { Experience } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineExperienceProps {
  experience: Experience;
}

export default function TimelineExperience(props: TimelineExperienceProps) {
  const {
    experience: { icon, date, title, description, location },
  } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { theme, toggleTheme } = useTheme();

  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        icon={icon}
        iconStyle={{
          background: theme === "light" ? "white" : "#28303D",
          fontSize: "1.5rem",
        }}
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.10)",
          borderRadius: "0.75rem",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255,255,255,0.5)",
        }}
        visible={inView}
        date={date}
      >
        <h3 className='font-semibold capitalize'>{title}</h3>
        <p className='font-normal !mt-0'>{location}</p>
        <p className='!font-normal !mt-1 text-gray-700 dark:text-white/70'>
          {description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
