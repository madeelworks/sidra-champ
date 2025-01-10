import React from "react";
import { motion } from "framer-motion";
import picture3 from "./picture-3.jpg"; // Import the third image
import picture4 from "./picture-4.jpg"; // Import the fourth image
import picture2 from "./picture-2.jpg"; // Import the second image

const About = () => {
  // Variants for animation
  const fadeInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const fadeInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const fadeInScale = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* First Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-24">
        <motion.div
          className="md:w-1/2"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Who is <span className="text-blue-600">Syeda Sidra?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Syeda Sidra is a national champion, an inspiring mentor, and an Olympic-level athlete. Her remarkable journey reflects resilience and unwavering determination. She has won numerous accolades and is a beacon of hope for young athletes worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond her sports achievements, Syeda Sidra actively mentors aspiring athletes, instilling confidence and guiding them toward success.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-12 relative flex justify-start"
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={picture2}
            alt="Syeda Sidra"
            className="rounded-lg shadow-lg border-4 border-blue-500 w-4/4"
          />
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-24">
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 relative flex justify-start order-last md:order-first"
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={picture4}
            alt="Syeda Sidra Journey"
            className="rounded-lg shadow-lg border-4 border-blue-500 w-4/4"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Syeda Sidra: <span className="text-blue-600">A Journey of Determination and Excellence</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Syeda Sidra is an accomplished Thai Kwon-Do athlete whose journey began in 2004. Starting from school competitions, she steadily rose through local and district events, earning recognition at regional and national levels. Her hard work and dedication culminated in achieving the prestigious title of Olympic Champion. Sidra’s story is a testament to resilience, passion, and determination, inspiring young athletes to follow their dreams.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Her journey began with her first Thai Kwon-Do training session, where she displayed focus and enthusiasm, marking the start of her remarkable career. A defining moment was her first school-level victory, celebrated with a medal and a beaming smile, symbolizing the beginning of her rise as a champion.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From her humble beginnings to becoming an Olympic Champion, Syeda Sidra’s journey reflects her unwavering commitment to excellence and serves as an inspiration to future generations.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
