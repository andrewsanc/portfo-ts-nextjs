"use client";

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

  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        icon={icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        visible={inView}
        date={date}
      >
        <h3 className='font-semibold capitalize'>{title}</h3>
        <p className='font-normal !mt-0'>{location}</p>
        <p className='!font-normal !mt-1 text-gray-700'>{description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
