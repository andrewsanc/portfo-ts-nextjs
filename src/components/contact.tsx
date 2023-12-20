"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{" "}
        <a href='mailto:druu831@gmail.com' className='underline'>
          druu831@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col'
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type='email'
          name='email'
          className='h-14 rounded-lg borderBlack px-4'
          placeholder='Your email'
          maxLength={500}
          required
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4'
          placeholder='Your message'
          maxLength={5000}
          required
        />
        <button
          type='submit'
          className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none flex items-center justify-center gap-2 transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950'
        >
          Submit
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
}