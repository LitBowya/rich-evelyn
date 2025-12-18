"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Heart, Users, Church, Calendar, Sparkles } from "lucide-react";

interface TimelineEvent {
  year: string;
  icon: any;
  title: string;
  description: string;
  highlight?: string;
  color: string;
}

export default function LoveStorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline: TimelineEvent[] = [
    {
      year: "2021",
      icon: Users,
      title: "Initial Introduction and Engagement",
      description:
        'Our initial meeting occurred in 2021 at the UCC campus. Assemblies of God Greater Accra Youth Camp. We were both registered participants in the "Marriage and Family Life" module. Day One Interaction: The first session was highly interactive. Following a compelling class discussion, I initiated a professional networking effort to obtain her contact information. Despite an initial, reserved hesitation, she ultimately provided her details. Subsequent Camp Period: Our interactions during the remainder of the camp were strictly transactional and cordial, primarily consisting of brief greetings.',
      highlight: "UCC Campus - AG Youth Camp",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
    },
    {
      year: "2021-2022",
      icon: Heart,
      title: "Establishing a Foundational Friendship",
      description:
        "Following the camp, I pursued contact, which was met with a consistent, measured reserve. Through persistent, respectful outreach, this reserve transitioned into a mutual, platonic friendship. This foundational phase lasted approximately one year.",
      highlight: "One Year of Friendship",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      year: "2022",
      icon: Sparkles,
      title: "Spiritual Confirmation and Formal Commitment",
      description:
        "Our first formal, private meeting occurred at the Silverbird Cinemas in Accra Mall. Prior to this meeting, I engaged in a targeted spiritual discernment process, requesting a specific, objective sign to confirm the alignment of this relationship with my long-term life goals. The requested sign was manifested precisely as envisioned, providing conclusive conviction.",
      highlight: "Silverbird Cinemas, Accra Mall",
      color: "bg-gradient-to-br from-blue-100 to-purple-100",
    },
    {
      year: "2022",
      icon: Church,
      title: "Proposal and Intercession",
      description:
        "Following this confirmation, I formally communicated my romantic intentions. Despite an initial series of rejections or deferrals, she ultimately communicated her affirmative decision not directly to me, but through an esteemed spiritual authority: Rev. Jonney Titus Kuzagbe, Head Pastor of REMA Basilica.",
      highlight: "Through Rev. Kuzagbe",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
    },
    {
      year: "Dec 20, 2022",
      icon: Calendar,
      title: "Official Ratification",
      description:
        "Rev. Kuzagbe subsequently invited me for a formal interview and validation session. Upon successful completion of this process, her acceptance was confirmed. Our official, recognized relationship commenced on December 20, 2022.",
      highlight: "Our Official Start",
      color: "bg-linear-to-br from-yellow-100 to-orange-100",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-6 md:py-24 bg-linear-to-b from-white via-secondary/10 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Our Love Story
          </h2>
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">
            A Journey Orchestrated by Divine Timing
          </p>
          <div className="h-1 w-24 bg-tertiary mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto aspect-4/3 rounded-3xl overflow-hidden shadow-2xl mb-16"
        >
          <Image
            src="/images/couple1.jpeg"
            alt="Richard and Evelyn"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="font-heading text-white text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">
              Richard & Evelyn
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-tertiary to-primary transform -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 md:space-y-16">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-primary shadow-lg items-center justify-center z-10">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`${event.color} p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-white backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                  >
                    {/* Mobile Icon */}
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-primary">
                        <event.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-heading text-3xl sm:text-4xl text-primary font-bold">
                        {event.year}
                      </span>
                    </div>

                    {/* Desktop Year */}
                    <div className="hidden md:block mb-4">
                      <span className="font-heading text-4xl sm:text-5xl text-primary font-bold">
                        {event.year}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3">
                      {event.title}
                    </h3>

                    {event.highlight && (
                      <div className="inline-block mb-4">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-base sm:text-lg font-sans font-semibold shadow-md">
                          {event.highlight}
                        </span>
                      </div>
                    )}

                    <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20 bg-linear-to-r from-primary/10 via-tertiary/10 to-primary/10 p-8 sm:p-12 rounded-3xl border-2 border-primary/20"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-primary fill-primary animate-pulse" />
          </div>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary italic mb-4">
            "From a youth camp to forever..."
          </p>
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
            And now, on{" "}
            <span className="font-bold text-primary">December 20, 2025</span>,
            exactly three years after their official start, Richard and Evelyn
            say{" "}
            <span className="font-heading text-2xl sm:text-3xl">"I Do"</span>{" "}
            and begin their lifetime of love together! 💍
          </p>
        </motion.div>
      </div>
    </section>
  );
}
