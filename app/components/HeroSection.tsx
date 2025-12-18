"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  const floatingHearts = [
    { delay: 0, duration: 3, x: "10%", y: "20%" },
    { delay: 0.5, duration: 4, x: "80%", y: "30%" },
    { delay: 1, duration: 3.5, x: "60%", y: "70%" },
    { delay: 1.5, duration: 3.2, x: "20%", y: "80%" },
    { delay: 0.8, duration: 3.8, x: "85%", y: "60%" },
    { delay: 1.2, duration: 3.3, x: "15%", y: "50%" },
    { delay: 2, duration: 3.6, x: "45%", y: "15%" },
    { delay: 0.3, duration: 4.2, x: "90%", y: "85%" },
  ];

  const sparkles = [
    { delay: 0.2, x: "25%", y: "35%" },
    { delay: 0.8, x: "70%", y: "45%" },
    { delay: 1.4, x: "30%", y: "65%" },
    { delay: 1.8, x: "75%", y: "75%" },
    { delay: 2.2, x: "50%", y: "25%" },
  ];

  const stars = [
    { delay: 0.5, x: "15%", y: "40%" },
    { delay: 1.1, x: "85%", y: "50%" },
    { delay: 1.7, x: "40%", y: "80%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-secondary/40 via-white to-tertiary/30">
      {/* Animated Background Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Hearts Background */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={`heart-${index}`}
          className="absolute opacity-20"
          style={{ left: heart.x, top: heart.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary" />
        </motion.div>
      ))}

      {/* Floating Sparkles */}
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute opacity-30"
          style={{ left: sparkle.x, top: sparkle.y }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-6 h-6 text-tertiary" />
        </motion.div>
      ))}

      {/* Floating Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={`star-${index}`}
          className="absolute opacity-25"
          style={{ left: star.x, top: star.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-5 h-5 text-primary fill-primary" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto">
        {/* Decorative Corner Elements */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Sparkles className="w-full h-full text-tertiary" />
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-20 h-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <Sparkles className="w-full h-full text-tertiary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border-2 border-tertiary/30">
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
              <span className="font-heading text-lg text-gray-700">
                We&apos;re Getting Married!
              </span>
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Couple Names with Enhanced Animation */}
          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Richard
            </motion.span>
            <span className="mx-3 text-primary">&</span>
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, -2, 2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Evelyn
            </motion.span>
          </motion.h1>

          {/* Enhanced Decorative Line with Pulse */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="h-1 w-20 bg-linear-to-r from-transparent via-tertiary to-tertiary rounded-full"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-7 h-7 text-primary fill-primary drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="h-1 w-20 bg-linear-to-l from-transparent via-tertiary to-tertiary rounded-full"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Tagline with Shimmer Effect */}
          <motion.p
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-14 italic relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.span
              className="relative inline-block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(224,17,95,0)",
                  "0 0 20px rgba(224,17,95,0.3)",
                  "0 0 0px rgba(224,17,95,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              Two Hearts, One Promise, A Lifetime of Love
            </motion.span>
          </motion.p>

          {/* Enhanced Wedding Details Card */}
          <motion.div
            className="space-y-5 text-gray-600 font-sans bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-tertiary/20 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
            >
              <Star className="w-8 h-8 text-primary fill-primary mx-auto mb-4" />
            </motion.div>
            <p className="text-2xl sm:text-3xl font-bold text-primary tracking-wide">
              December 20th, 2025
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
              <p className="text-xl sm:text-2xl font-semibold">1:00 PM</p>
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <div className="pt-3 border-t border-tertiary/30">
              <p className="text-lg sm:text-xl font-medium max-w-md mx-auto leading-relaxed">
                Life Gate Assemblies Of God
                <br />
                <span className="text-gray-500">Teshie-Tebibiianor</span>
              </p>
            </div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-7 h-12 border-2 border-primary rounded-full mx-auto flex items-start justify-center p-2 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <p className="text-sm text-gray-500 mt-3 font-sans">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
