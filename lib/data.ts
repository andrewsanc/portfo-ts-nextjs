import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer III",
    location: "Remote",
    description:
      "As a Full-Stack engineer for the 'Ready Homes' team, our primary goal was to develop features on a web-based construction management application that transformed Homebounds' business model and provided benefits to stakeholders.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer II - UI/UX",
    location: "Monterey, CA",
    description:
      "As a software developer, I specialized in front-end development and collaborated closely with stakeholders to encourage user adoption of a web-based Learning Management Application.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Web Developer",
    location: "Monterey, CA",
    description:
      "As a web developer, I provided consultation services to small businesses and worked with a team to enhance and revamp their online presence.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Computer Science Graduate",
    location: "Monterey, CA",
    description:
      "I attend CSUMB and graduated with a Bachelor of Science in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Apollo",
  "Express",
  "JQuery",
  "Prisma",
  "Tailwind",
  "Jest",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Python",
  "Flask",
  "Django",
  "Framer Motion",
  "Git",
] as const;
