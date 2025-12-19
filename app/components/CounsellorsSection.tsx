"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeartHandshake } from "lucide-react";

export default function CounsellorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const counsellors = [
    "Rev Daniel Agyare Otchere",
    "Deacon Daniel Tetteh Amarh",
    "Central AG Marriage Committee",
  ];

  return (
    <section ref={ref} className="py-16 px-6 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <HeartHandshake className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Marriage Counsellors
          </h2>
          <div className="h-1 w-24 bg-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {counsellors.map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-linear-to-r from-secondary/30 to-tertiary/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary rounded-full shrink-0"></div>
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold">
                  {name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appreciation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-xl sm:text-2xl md:text-2xl text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
            We are deeply grateful for the wisdom, guidance, and support as we
            prepare for this sacred journey together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
