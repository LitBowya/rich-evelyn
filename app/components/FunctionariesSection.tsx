"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Sparkles } from "lucide-react";

export default function FunctionariesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const functionaries = [
    {
      name: "Rev Daniel Agyare Otchere",
      title: "Head Pastor Life Gate Chapel AG",
    },
    {
      name: "Rev Divine K. Addae",
      title: "Head Pastor Central AG, Ashaiman",
    },
    {
      name: "Rev/Mrs. Charity Addae",
      title: "Senior Associate Pastor",
    },
    {
      name: "Rev James Garibey",
      title: "Associate Pastor",
    },
    {
      name: "Rev. Jonney Titus Kuzagbe",
      title: null,
    },
    {
      name: "Pastor Nicholas Awuah Amoah",
      title: "Student Pastor",
    },
    {
      name: "Pastor Jean-Michel Nutefe-Elloh",
      title: null,
    },
    {
      name: "Pastor Felicia Heloo Attah",
      title: null,
    },
    {
      name: "Pastor Jesse Johnson Adedia",
      title: null,
    },
    {
      name: "Pastor Eric Anomah",
      title: null,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:py-32 bg-linear-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary to-purple-600 rounded-full mb-6 shadow-xl"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6 leading-tight">
            Officiating Ministers
          </h2>

          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-1.5 w-32 bg-linear-to-r from-transparent via-primary to-primary rounded-full"></div>
            <Sparkles className="w-6 h-6 text-tertiary" />
            <div className="h-1.5 w-32 bg-linear-to-l from-transparent via-primary to-primary rounded-full"></div>
          </motion.div>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-gray-600 italic">
            Blessed servants leading our union
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {functionaries.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary overflow-hidden">
                {/* Top Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-tertiary/10 to-transparent rounded-bl-full"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  {/* Decorative Icon */}
                  <motion.div
                    className="w-3 h-3 mt-2 bg-linear-to-br from-primary to-pink-500 rounded-full flex-shrink-0 shadow-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />

                  <div className="flex-1">
                    {/* Name */}
                    <h3 className="font-heading text-xl sm:text-2xl md:text-2xl text-gray-800 font-bold mb-2 leading-tight">
                      {person.name}
                    </h3>

                    {/* Title (if exists) */}
                    {person.title && (
                      <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 italic leading-relaxed">
                        {person.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-10 py-6 bg-linear-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl shadow-lg backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-8 h-8 text-primary" />
            <p className="font-heading text-xl sm:text-2xl md:text-3xl text-gray-700 italic leading-relaxed">
              With hearts full of gratitude
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
