"use client";

import Image from "next/image";
import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: "0.2" }}
          >
            <Image
              src={portrait}
              width='192'
              height='192'
              quality='95'
              alt='Andrew Sanchez portrait'
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
              priority
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className='mv-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Andrew.</span> I'm a{" "}
        <span className='font-bold'>Full-Stack Engineer</span> with{" "}
        <span className='font-bold'>4 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{" "}
        <span className='underline'>
          React (Next.js), Nodejs, Expressjs, Prisma, PostgreSQL,
        </span>{" "}
        and <span className='underline'>MongoDB</span>.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium py-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here{" "}
          <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
        </Link>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10'
          href='https://drive.google.com/uc?export=download&id=1jclj03IxTEuqjIFCtaQxQ3M5P1HOO1u4'
        >
          Download CV{" "}
          <HiDownload className='opacity-60 group-hover:translate-y-2 transition' />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'
          href='https://www.linkedin.com/in/andrewsanc/'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'
          href='https://github.com/andrewsanc'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
