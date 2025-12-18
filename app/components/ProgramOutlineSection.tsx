"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProgramOutlineSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const program = [
    { time: "", title: "Guests Arrival / Musical Interlude", performer: "" },
    {
      time: "",
      title: "Opening Prayer",
      performer: "Pastor Nicholas Awuah Amoah",
    },
    { time: "", title: "Bridal Procession", performer: "Voices of Life" },
    { time: "", title: "Praise and Worship", performer: "Voices of Life" },
    { time: "", title: "Offertory", performer: "Voices of Life" },
    { time: "", title: "Welcome Remarks", performer: "Deacon Daniel Tetteh" },
    { time: "", title: "Opening Hymn", performer: "Harps of David" },
    { time: "", title: "Choir Ministration", performer: "Harps of David" },
    {
      time: "",
      title: "Word Exhortation / Altar Call",
      performer: "Rev James Garibey",
    },
    {
      time: "",
      title: "Officiating of Wedding Vows",
      performer: "Rev Daniel Agyare Otchere",
    },
    {
      time: "",
      title: "Signing of Marriage Certificate",
      performer: "Rev Daniel Agyare Otchere",
    },
    { time: "", title: "Love Offertory", performer: "Deaconess Eugenia Tsi" },
    {
      time: "",
      title: "Introduction of Couples",
      performer: "Rev Daniel Agyare-Otchere",
    },
    {
      time: "",
      title: "Presentation of Certificate",
      performer: "Mrs Beatrice Agyari-Otchere",
    },
    {
      time: "",
      title: "Introduction of Dignitaries",
      performer: "MC",
    },
    { time: "", title: "Closing Prayer", performer: "Rev James Garibey" },
    { time: "", title: "Benediction", performer: "Rev Daniel Agyare-Otchere" },
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
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Program Outline
          </h2>
          <div className="h-1 w-24 bg-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-tertiary to-primary"></div>

          {/* Program Items */}
          <div className="space-y-6">
            {program.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20 pr-4"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className="bg-linear-to-r from-secondary/20 to-white rounded-lg p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-gray-800 mb-1 font-semibold">
                    {item.title}
                  </h3>
                  {item.performer && (
                    <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 italic">
                      {item.performer}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
