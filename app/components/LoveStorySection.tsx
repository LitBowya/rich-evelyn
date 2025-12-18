"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function LoveStorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-16 px-6 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Our Love Story
          </h2>
          <div className="h-1 w-24 bg-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/couple1.jpeg"
              alt="Richard and Evelyn"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
              In a world of endless possibilities, two souls found each other.
              Richard and Evelyn's journey began with a simple smile and grew
              into a love story written in the stars.
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
              Through laughter and tears, dreams and challenges, they discovered
              that love is not just a feeling—it's a choice they make every day.
              A choice to support, to cherish, and to grow together.
            </p>
            <p className="font-heading text-2xl sm:text-3xl text-primary italic mt-8">
              And now, they're ready to say "I do" and begin their forever
              together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
