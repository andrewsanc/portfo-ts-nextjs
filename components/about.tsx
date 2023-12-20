"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-36 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{" "}
        <span className='font-medium'>Computer Science</span> I used my passion
        for programming to solve problems and improve people&apos;s lives.{" "}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I&apos;m also familiar with TypeScript and Prisma. I&apos;m always
        looking to learn new technologies. I&apos;m currently looking for a{" "}
        <span className='font-medium'>full-time position</span> as a{" "}
        <span className='font-medium'>Software Engineer</span>.
      </p>

      <p>
        <span className='italic'>When I&apos;m not coding</span>, I enjoy
        working out, watching movies, and playing with my dog. I also enjoy{" "}
        <span className='font-medium'>learning try new things</span>. I&apos;m
        currently learning about{" "}
        <span className='font-medium'>cooking and philosophy</span>.
      </p>
    </motion.section>
  );
}
