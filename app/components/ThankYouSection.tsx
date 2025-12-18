"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart } from "lucide-react";

export default function ThankYouSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:py-32 bg-linear-to-br from-primary/10 via-secondary/30 to-tertiary/20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={inView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary fill-primary mx-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6">
            Thank You
          </h2>

          <div className="space-y-6">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
              Your presence in our lives has been a blessing beyond measure, and
              having you share in our special day means the world to us.
            </p>

            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
              As we embark on this beautiful journey of marriage, we carry with
              us the love, prayers, and warm wishes of family and friends like
              you.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary italic mt-8"
            >
              With hearts full of gratitude and love,
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-6"
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-primary">
                Richard & Evelyn
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Heart className="w-4 h-4 text-tertiary fill-tertiary" />
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <Heart className="w-4 h-4 text-tertiary fill-tertiary" />
        </motion.div>
      </div>
    </section>
  );
}
