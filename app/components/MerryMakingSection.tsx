"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cake, Sparkles } from "lucide-react";

export default function MerryMakingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cakeCutting = ["Rev. Jonney Titus Kuzagbe & Mrs. Kuzagbe"];

  const champagnePopping = [
    "Pastor Timothy Atipoe Tetteh",
    "Fabric Joseph Elloh-Nutefe",
    "Jean Kai Adama Elloh",
    "Simon Nketia",
    "John Ferry Elloh",
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-6 md:py-24 bg-linear-to-br from-tertiary/20 via-secondary/30 to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Merry Making
          </h2>
          <div className="h-1 w-24 bg-tertiary mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-xl sm:text-2xl md:text-2xl text-gray-600">
            Let the celebration begin!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Cake Cutting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-primary to-pink-400 rounded-full flex items-center justify-center">
                <Cake className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-heading text-4xl sm:text-5xl md:text-5xl text-center text-primary mb-6">
              🍰 Cake Cutting
            </h3>
            <div className="space-y-4">
              {cakeCutting.map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-linear-to-r from-secondary/40 to-tertiary/20 rounded-lg p-4 text-center"
                >
                  <p className="font-sans text-xl sm:text-2xl md:text-2xl text-gray-700 font-medium">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Champagne Popping */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-primary to-pink-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-heading text-4xl sm:text-5xl md:text-5xl text-center text-primary mb-6">
              🍾 Champagne Popping
            </h3>
            <div className="space-y-3">
              {champagnePopping.map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-linear-to-r from-tertiary/20 to-secondary/40 rounded-lg p-4 text-center"
                >
                  <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Celebration Banner */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="font-heading text-2xl sm:text-3xl md:text-3xl text-primary">
              <span className="inline-block animate-pulse">✨</span> Join us in
              celebration <span className="inline-block animate-pulse">✨</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
