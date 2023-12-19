"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView({ sectionName: "Experience" });

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 '>
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline animate={false} lineColor=''>
        {experiencesData.map(
          ({ title, icon, location, description, date }, index) => (
            <React.Fragment key={index}>
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
                date={date}
              >
                <h3 className='font-semibold capitalize'>{title}</h3>
                <p className='font-normal !mt-0'>{location}</p>
                <p className='!font-normal !mt-1 text-gray-700'>
                  {description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
