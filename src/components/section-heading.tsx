import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading(props: SectionHeadingProps) {
  const { children } = props;

  return <h2 className='text-3xl font-medium capitalize mb-8'>{children}</h2>;
}
