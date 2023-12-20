"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import TimelineExperience from "./timeline-experience";

export default function Experience() {
  const { ref } = useSectionInView({ sectionName: "Experience" });

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <TimelineExperience experience={experience} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
