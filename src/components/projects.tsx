"use client";

import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.5 });

  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
