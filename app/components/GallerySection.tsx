"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gallery = {
    bride: [
      { src: "/images/bride1.jpeg", alt: "Bride Portrait 1" },
      { src: "/images/bride2.jpeg", alt: "Bride Portrait 2" },
    ],
    groom: [{ src: "/images/groom1.jpeg", alt: "Groom Portrait 1" }],
    couple: [
      { src: "/images/couple1.jpeg", alt: "Couple Moment 1" },
      { src: "/images/couple2.jpeg", alt: "Couple Moment 2" },
      { src: "/images/couple3.jpeg", alt: "Couple Moment 3" },
      { src: "/images/couple4.jpeg", alt: "Couple Moment 4" },
      { src: "/images/couple5.jpeg", alt: "Couple Moment 5" },
      { src: "/images/couple6.jpeg", alt: "Couple Moment 6" },
      { src: "/images/couple7.jpeg", alt: "Couple Moment 7" },
      { src: "/images/couple8.jpeg", alt: "Couple Moment 8" },
      { src: "/images/couple9.jpeg", alt: "Couple Moment 9" },
      { src: "/images/couple10.jpeg", alt: "Couple Moment 10" },
      { src: "/images/couple11.jpeg", alt: "Couple Moment 11" },
    ],
  };

  const allImages = [
    ...gallery.bride.map((img) => ({ ...img, category: "Bride" })),
    ...gallery.groom.map((img) => ({ ...img, category: "Groom" })),
    ...gallery.couple.map((img) => ({ ...img, category: "Couple" })),
  ];

  return (
    <>
      <section
        ref={ref}
        className="py-16 px-6 md:py-24 bg-linear-to-br from-secondary/20 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
              Our Moments
            </h2>
            <div className="h-1 w-24 bg-tertiary mx-auto rounded-full mb-4"></div>
            <p className="font-sans text-lg text-gray-600">
              Capturing the love, joy, and anticipation
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="
                        object-cover 
                        object-[center_20%] 
                        group-hover:scale-110 
                        transition-transform 
                        duration-500
  "
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-heading text-white text-sm bg-primary/80 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
