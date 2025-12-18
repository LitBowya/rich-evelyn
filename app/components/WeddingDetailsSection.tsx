"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function WeddingDetailsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const details = [
    {
      icon: Calendar,
      label: "When We Say I Do",
      value: "20th December, 2025",
      subtext: "Mark your calendar!",
      color: "from-pink-500 to-rose-600",
      shadowColor: "shadow-pink-500/50",
    },
    {
      icon: Clock,
      label: "Time to Celebrate",
      value: "1:00 PM",
      subtext: "Don't be late!",
      color: "from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/50",
    },
    {
      icon: MapPin,
      label: "Where Love Unites",
      value: "Life Gate Assemblies Of God, Teshie-Tebibiianor",
      subtext: "See you there!",
      color: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/50",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:py-32 bg-linear-to-br from-pink-50 via-purple-50 to-teal-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-teal-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-primary fill-primary animate-pulse" />
              <Sparkles
                className="w-8 h-8 text-tertiary absolute -top-2 -right-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6 leading-tight">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              Join Our
            </motion.span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-purple-600 to-teal-600">
              Celebration
            </span>
          </h2>

          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-1.5 w-32 bg-linear-to-r from-transparent via-pink-400 to-pink-400 rounded-full"></div>
            <Sparkles className="w-6 h-6 text-purple-500" />
            <div className="h-1.5 w-32 bg-linear-to-l from-transparent via-teal-400 to-teal-400 rounded-full"></div>
          </motion.div>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-gray-600 italic">
            Here&apos;s everything you need to know!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.2,
                type: "spring",
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              {/* Glowing Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${detail.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white overflow-hidden">
                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-tertiary/20 to-transparent rounded-bl-full"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  {/* Animated Icon Container */}
                  <motion.div
                    className={`relative w-24 h-24 rounded-2xl bg-linear-to-br ${detail.color} flex items-center justify-center ${detail.shadowColor} shadow-2xl`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <detail.icon
                      className="w-12 h-12 text-white drop-shadow-lg"
                      strokeWidth={2.5}
                    />

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-4 border-white/50"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Label */}
                  <h3 className="font-heading text-2xl md:text-3xl text-gray-800 font-bold">
                    {detail.label}
                  </h3>

                  {/* Divider */}
                  <div className="flex items-center gap-2 w-full justify-center">
                    <div className="h-px w-8 bg-linear-to-r from-transparent to-gray-300"></div>
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <div className="h-px w-8 bg-linear-to-l from-transparent to-gray-300"></div>
                  </div>

                  {/* Value */}
                  <p className="font-sans text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold min-h-[60px] flex items-center">
                    {detail.value}
                  </p>

                  {/* Subtext Badge */}
                  <motion.div
                    className={`px-6 py-2 rounded-full bg-linear-to-r ${detail.color} text-white font-medium text-base shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {detail.subtext}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 px-10 py-6 bg-linear-to-r from-pink-500 via-purple-500 to-teal-500 rounded-full shadow-2xl text-white relative overflow-hidden group cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            <Sparkles
              className="w-7 h-7 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span className="font-heading text-2xl md:text-3xl font-bold relative z-10">
              We Can&apos;t Wait to See You!
            </span>
            <Heart className="w-7 h-7 fill-white animate-pulse" />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-7 h-7" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Bottom Elements */}
        <div className="mt-16 flex justify-center gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart className="w-6 h-6 text-primary fill-primary opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
