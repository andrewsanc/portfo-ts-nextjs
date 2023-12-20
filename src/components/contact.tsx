"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "./section-heading";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

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
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{" "}
        <a href='mailto:druu831@gmail.com' className='underline'>
          druu831@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black/70'
        action={async (formData) => {
          await sendEmail(formData);

          toast.success("Your message was sent successfully!");
        }}
      >
        <input
          type='email'
          name='email'
          className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your email'
          maxLength={500}
          required
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your message'
          maxLength={5000}
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
