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
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref } = useSectionInView({ sectionName: "Experience" });

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map(
          ({ title, icon, location, description, date }, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
            });

            return (
              <div key={index} ref={ref} className='vertical-timeline-element'>
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
                  <p className='!font-normal !mt-1 text-gray-700'>
                    {description}
                  </p>
                </VerticalTimelineElement>
              </div>
            );
          }
        )}
      </VerticalTimeline>
    </section>
  );
}
