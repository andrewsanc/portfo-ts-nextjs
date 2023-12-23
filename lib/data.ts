import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import infoClockApp from "/public/clock-app.png";
import devjobsApp from "/public/devjobs-app.png";
import ipAddressTrackerApp from "/public/ip-address-tracker-app.png";
import devfinderApp from "/public/dev-finder-app.png";

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
    title: "Info Clock App",
    description:
      "An app that seamlessly integrates the current time, inspirational quotes, and a 3-day weather forecast into a minimalist interface.",
    tags: [
      "JavaScript",
      "React",
      "API",
      "CSS",
      "Supabase",
      "Authentication",
      "Vite",
      "Netlify",
    ],
    imageUrl: infoClockApp,
    projectUrl: "https://poetic-tartufo-b20c77.netlify.app/",
  },
  {
    title: "Devjobs App",
    description:
      "Devjobs is a web based job board for professional developers. Supported features like filtering and dark mode.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: devjobsApp,
    projectUrl: "https://devjobs-ts-nextjs.vercel.app/",
  },
  {
    title: "IP Address Tracker App",
    description:
      "A public web app for finding information about the users ip-address or search for a particular ip-address.",
    tags: ["JavaScript", "React", "API", "CSS", "Vite", "Netlify"],
    imageUrl: ipAddressTrackerApp,
    projectUrl: "https://ip-addresstracker-app.netlify.app/",
  },
  {
    title: "Devfinder",
    description:
      "An application that provide users with an easy and efficient way to search for GitHub users and view their profile statistics.",
    tags: ["JavaScript", "React", "API", "CSS", "Vite", "Netlify"],
    imageUrl: devfinderApp,
    projectUrl: "https://andrewsanc.github.io/github-user-search/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
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
  "CircleCi(Ci/Cd)",
  "Git",
] as const;
